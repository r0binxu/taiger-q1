(function () {
    angular
        .module("App")
        .config(appConfig)
    appConfig.$inject = ["$stateProvider", "$urlRouterProvider"];


    function appConfig($stateProvider, $urlRouterProvider) {

        $stateProvider   
        .state("landing",{
            url:"/landing",
            templateUrl:"./app/main/landing.html",
            controller:"LandingCtrl",
            controllerAs:"ctrl"
        })

        $urlRouterProvider.otherwise("/landing");


    }


})();