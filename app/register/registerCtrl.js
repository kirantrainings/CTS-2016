angular.module('register')
    .controller("registerCtrl", ['$scope', function ($scope) {

        $scope.registerUser = {};
        $scope.countries = [{
                name: "India",
                code: "IN",
                continent: "Asia"
            },
            {
                name: "Canada",
                code: "CA",
                continent: "North America"
            },
            {
                name: "Germany",
                code: "GE",
                continent: "Europe"
            }];
        $scope.saveUser = function () {
            if ($scope.selectedCountry) {
                $scope.registerUser.countryCode = $scope.selectedCountry.code;
            }
            console.log($scope.registerUser);
        }
    }]);
