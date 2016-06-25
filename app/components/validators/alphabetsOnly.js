(function () {

    angular.module('components')
        .directive('alphabetsOnly', [function () {
            return {
                restrict: "A",
                link: function (scope, element, attrs) {
                    /*console.log(scope);
                            console.log(element);
                            conosle.log(attrs);
                    
                            */
                    element.bind('keypress', function (evt) {
                        if ((evt.charCode >= 65 && evt.charCode <= 90) || (evt.charCode >= 97 && evt.charCode <= 122)) {

                        } else {
                            evt.preventDefault();
                        }
                    })
                }
            };
                    }]);


})();
