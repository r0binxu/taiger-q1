(function () {
angular
  .module("App")
  .controller("NavCtrl", ["$scope", "$stateParams" ,"RequestSvc", "$localStorage", "Flash" , NavCtrl]);

  function NavCtrl($scope, $stateParams ,RequestSvc, $localStorage, Flash) {
    var ctrl = this;
    ctrl.projectsData = "";
    ctrl.github_username = "";
    ctrl.name = $stateParams.name;

    ctrl.getUserRepos = function() {
      RequestSvc.userRepos(ctrl.github_username)
      .then(function(res) {
        if (res.data.length === 0){
          var message = 'Sorry, that user currently do not have any public repositories. Please try again.';
          Flash.create('warning', message);
        } else { 
          ctrl.userrepo = res.data;
          $localStorage.userrepo = res.data;
          $scope.$broadcast('updateUserrepo', {userrepo: res.data});
          ctrl.name = ctrl.github_username;
        }
      })
      .catch(function(err){
          var message = 'Sorry, that username might not exists on Github. Please try again.';
          Flash.create('warning', message);
        })
    }
}
})();