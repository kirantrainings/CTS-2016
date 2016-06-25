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
                }
            };
        }]);


})();
