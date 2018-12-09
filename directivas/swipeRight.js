app.directive('swipeRight', function() {
    return function(scope, element, attrs) {
         angular.element(document).ready(function () {
                 var hammerSwipeRight = new Hammer(element[0]);
         hammerSwipeRight.on('swiperight', function() {
                     scope.$eval(attrs.swipeRight);
                     scope.$apply();
                 });
         });
     };
 });