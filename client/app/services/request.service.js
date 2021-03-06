(function () {
  angular
    .module("App")
    .service("RequestSvc", ["$http", "$q", RequestSvc]);

    function RequestSvc($http) {
      var requestSvc = this;
      requestSvc.repoReadme = function(name, repo) {
        return $http({
          method: 'GET',
          url: 'https:/api.github.com/repos/' + name + '/' + repo + '/readme'  
        });
      }

      requestSvc.userRepos = function(username){
        return $http({
          method: 'GET',
          url: 'https://api.github.com/users/' + username + '/repos'
        });
      }
} 
})();