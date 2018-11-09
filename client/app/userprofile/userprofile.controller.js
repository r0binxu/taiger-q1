(function () {
    angular
        .module("App")
        .controller("ProfileCtrl", ["$scope","RequestSvc", "$localStorage", "Flash" , ProfileCtrl]);

    function ProfileCtrl($scope, RequestSvc, $localStorage, Flash){
        var ctrl = this;

        $scope.markdown = "";

        ctrl.repoList = $localStorage.userrepo;

        $scope.$on('updateUserrepo', function(event, data){
            console.log(event);
            ctrl.repoList = data.userrepo;

        })


        ctrl.selectrepo = function(item){

            var username = item.owner.login
            var reponame = item.name

            var markdown;

            RequestSvc.repoReadme(username, reponame)
            .then(function(res){
                console.log('repoReadme res is: ' + JSON.stringify(res));
               
                markdown = res.data.content
              
                $scope.markdown = atob(markdown)

            })
            .catch(function(err){
                console.log('repoReadme err is: ' + JSON.stringify(err));

                var message = "README is unavailable for selected Repo."

                if (err.data.message === "Not Found"){

                    Flash.create('warning', message);

                }
            })

        }





        

       

    }
})();