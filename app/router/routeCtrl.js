angular.module('vehicleApp')
    .controller("routeCtrl", function ($state, $scope) {

        $scope.handleClick = function (type) {
            $state.go(type);
        }
    });
