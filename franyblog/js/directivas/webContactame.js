(function () {
    'use strict';

    angular
        .module ('app')
        .directive ('wbContactame', directive);

    directive.$inject = ['$window'];

    function directive($window) {
     
        var directive = {
            restrict: 'E',
            templateUrl: 'views/contactame.html'
        };
        return directive;

        function link(scope, element, attrs) {
        }
    }

})();