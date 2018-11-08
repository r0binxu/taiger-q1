(function () {
    angular
        .module("App")
        .controller("LandingCtrl", ["$state", "RequestSvc",LandingCtrl]);

    function LandingCtrl($state, RequestSvc){
        var ctrl = this;

        ctrl.teamMembers = "";

        RequestSvc.team()
        .then(function(res){
            console.log('res is: ' + JSON.stringify(res));
            ctrl.teamMembers = res.data;
        })
        .catch(function(err){

        })





        

       

    }
})();