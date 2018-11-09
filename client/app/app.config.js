(function () {
    angular
        .module("App")
        .config(appConfig)
    appConfig.$inject = ["$stateProvider", "$urlRouterProvider", "FlashProvider"];


    function appConfig($stateProvider, $urlRouterProvider, FlashProvider) {

        $stateProvider
        .state("nav",{
            url:"/nav",
            templateUrl:"./app/nav/nav.html",
            controller:"NavCtrl",
            controllerAs:"ctrl"
        })   
        .state("auth",{
            url:"/start",
            templateUrl:"./app/start/start.html",
            controller:"AuthCtrl",
            controllerAs:"ctrl"
        })
        .state("nav.profile",{
            url:"/profile/:name",
            views: {
                'content':{
                    templateUrl:"./app/userprofile/userprofile.html",
                    controller:"ProfileCtrl",
                    controllerAs:"ctrl",
                }
            }
           
        })

        $urlRouterProvider.otherwise("/start");
        FlashProvider.setTimeout(13000);



    }


})();