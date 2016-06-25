(function () {

    angular.module('components')
        .directive('customHeader', [function () {
            return {
                restrict: "A",
                templateUrl: "app/components/appHeader/customHeader.tpl.html",
                scope: {
                    tabs: "=",
                    brand: "@",
                    handleTabClick: "&"
                },
                controller: function ($scope, $rootScope) {
                    $scope.productCount = 0;

                    $scope.$on('VEHICLE-ADDED', function (evt, arg) {
                        $scope.productCount++;
                    });
                    $scope.$on('VEHICLE-REMOVED', function (evt, arg) {
                        $scope.productCount--;
                    })
                }
            };
        }]);


})();
