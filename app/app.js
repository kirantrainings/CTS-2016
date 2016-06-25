angular.module('vehicleApp', ['common', 'register', 'vehicles', 'components', 'ui.router']);
//Configuring the UI router

angular.module('vehicleApp')
    .config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

        var register = {
            templateUrl: "app/register/register.html",
            controller: "registerCtrl",
            url: "/register",
            params: {
                item: ""
            }
        };
        var vehicles = {
            url: "/vehicles",
            templateUrl: "app/vehicles/vehicle.html"
        };
        $stateProvider.state("register", register);
        $stateProvider.state("vehicles", vehicles);
}]);
angular.module('vehicleApp')
    .run(['$rootScope', function ($rootScope) {

        $rootScope.$on('$stateChangeStart',
            function (event, toState, toParams, fromState, fromParams, options) {
                console.log(toState);
                console.log(fromState);
            })
}]);
