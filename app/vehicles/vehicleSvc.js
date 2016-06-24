angular.module('vehicles')
    .service('vehicleSvc', ['$http', '$q', function ($http, $q) {
        var vehicles = [
            {
                "year": 2016,
                "make": "Audi",
                "model": "A5"
        },
            {
                "year": 2016,
                "make": "Benz",
                "model": "c2000"
        },
            {
                "year": 2016,
                "make": "Nissan",
                "model": "Terrano"
        }
    ];



        this.getVehicles = function () {
            return vehicles;
        };

}]);


angular.module('vehicles')
    .controller('vehicleCtrl', ['$scope', 'vehicleSvc', function ($scope, vehicleSvc) {

        $scope.vehicles = vehicleSvc.getVehicles();
}]);
