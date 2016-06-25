(function () {

    angular.module('components')
        .directive('numbersOnly', [function () {
            return {
                restrict: "A",
                link: function (scope, element, attrs) {
                    var type = attrs["controltype"];
                    var checkLength = 0;
                    if (type == "age") {
                        checkLength = 3;
                    }
                    if (type == "phone") {
                        checkLength = 10;
                    }
                    element.bind('keypress', function (evt) {
                        var length = $(this).val().length;
                        if (evt.charCode >= 48 && evt.charCode <= 57) {
                            if (checkLength > 0 && length >= checkLength) {
                                evt.preventDefault();
                            }

                        } else {
                            evt.preventDefault();
                        }
                    })
                }
            };
                    }]);


})();
