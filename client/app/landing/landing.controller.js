(function () {
    angular
        .module("App")
        .controller("LandingCtrl", ["$state", "RequestSvc",LandingCtrl]);

    function LandingCtrl($state, RequestSvc){
        var ctrl = this;

        ctrl.teamMembers = "";

        this.$onInit = function(){

        RequestSvc.team()
        .then(function(res){
            console.log('res is: ' + JSON.stringify(res));
            ctrl.teamMembers = res.data;
        })
        .catch(function(err){

        })

        }

        ctrl.viewMember = function(item){
            console.log('member name: '  + item.name)

            $state.go('nav.member', {name: item.name})
        }





        

       

    }
})();