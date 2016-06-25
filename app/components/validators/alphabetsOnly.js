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
                        if ((evt.keyCode >= 65 && evt.keyCode <= 90) || (evt.keyCode >= 97 && evt.keyCode <= 122)) {

                        } else {
                            evt.preventDefault();
                        }
                    })
                }
            };
                    }]);


})();
