angular.module('vehicles')
    .service('vehicleSvc', ['$http', '$q', function ($http, $q) {
        var vehicles;



        this.getVehicles = function () {
            return vehicles;
        };
        this.getVehiclesFromJson = function () {

            var dfd = $q.defer();
            if (vehicles) {
                dfd.resolve(vehicles);
            }
            $http.get('app/data/vehicles.json').then(function (response) {
                    vehicles = response;
                    dfd.resolve(response);
                })
                .catch(function (errorResponse) {
                    dfd.reject("error occured");
                });
            return dfd.promise;

        };

}]);


angular.module('vehicles')
    .controller('vehicleCtrl', ['$scope', 'vehicleSvc', function ($scope, vehicleSvc) {

        //$scope.vehicles = vehicleSvc.getVehicles();

        vehicleSvc.getVehiclesFromJson()
            .then(function (response) {
                console.log(response);
                $scope.vehicles = response.data.vehicles;

            }).catch(function (errorResponse) {
                console.log(errorResponse);
            });
}]);
