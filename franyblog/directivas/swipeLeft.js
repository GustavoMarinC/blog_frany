app.directive('swipeLeft', function() {
    return function(scope, element, attrs) {
    angular.element(document).ready(function () {
            var hammerSwipeLeft = new Hammer(element[0]);
        hammerSwipeLeft.on('swipeleft', function() {
                        scope.$eval(attrs.swipeLeft);
                    scope.$apply();
                });
        });

    };
})

