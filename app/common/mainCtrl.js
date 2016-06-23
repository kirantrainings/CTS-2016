angular.module('common')
    .controller("mainCtrl", ['$scope', function ($scope) {
        $scope.loadContent = function (type) {
            console.log(type);
            if (type == 'vehicles') {
                $scope.contentUrl = "app/vehicles/vehicle.html";
            }
        };
    }]);
