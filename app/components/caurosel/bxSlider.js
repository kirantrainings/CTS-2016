angular.module("components")
    .directive("bxSlider", function () {
        return {
            templateUrl: "app/components/caurosel/slider.tpl.html",
            link: function (scope, element, attrs) {
                var sliders = element.find('.bxSlider');
                if (sliders) {
                    $(sliders).bxSlider();
                }
            }
        };
    })
