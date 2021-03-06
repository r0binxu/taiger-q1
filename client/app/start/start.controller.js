
(function () {
angular
  .module("App")
  .controller("AuthCtrl", ["$scope","$state","$localStorage" ,"RequestSvc", "Flash",AuthCtrl]);

  function AuthCtrl($state, $localStorage , RequestSvc, Flash) {
    var ctrl = this;
    ctrl.inputType = "password"; 

    ctrl.getUserRepos = function() {
      RequestSvc.userRepos(ctrl.github_username)
      .then(function(res) {
        if (res.data.length === 0){
          var message = 'Sorry, that user currently do not have any public repositories. Please try again.';
          Flash.create('warning', message);
        } else {
          ctrl.userrepo = res.data;
          $localStorage.userrepo = res.data;
          $state.go("nav.profile", {name: ctrl.github_username });
        }
      })
      .catch(function(err){
        var message = 'Sorry, that username might not exists on Github. Please try again.';
        Flash.create('warning', message);
      })
    }
}
})();