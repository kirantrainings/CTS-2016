(function () {

    angular.module('components')
        .directive('appHeader', [function () {
            return {
                //template: "<h1>Hello World</h1>"
                templateUrl: "app/components/appHeader/appHeader.tpl.html"
            };
        }]);


})();
