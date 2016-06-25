angular.module('common')
    .controller("mainCtrl", ['$scope', function ($scope) {
        $scope.companyName = "Cognizant";
        $scope.navItems = [{
                name: "vehciles",
                contentUrl: "app/vehicles/vehicle.html"
            },
            {
                name: "register",
                contentUrl: "app/register/register.html"
            }];


        $scope.loadContent = function (type) {
            $scope.contentUrl = type.contentUrl;
        };
    }]);
