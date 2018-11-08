(function () {

    angular.module("App")
        .service("RequestSvc", [
            "$http",
            RequestSvc
        ]);

    function RequestSvc($http) {
        var requestSvc = this;
        

        requestSvc.team = function(){ 
            return $http({
                method: 'GET'
                , url: '/team'
            });
        }

        // requestSvc.viewrent = function(token){ 
        //     return $http({
        //         method: 'GET'
        //         , url: '/api/'
        //         , params: {
        //             "queryProfile": token
        //         }
        //     });
        // }

       

  
    } 

})();