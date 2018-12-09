app.directive('myBackgroundImage', function () {
    return function (scope, element, attrs) {
        scope.$watch(attrs.myBackgroundImage, function(v) {
            element.css({
                'background-image': 'url(' + v + ')',
                'background-size': 'cover',
                'background-repeat': 'no-repeat',
                'background-position': 'center center'
            });
        });
    };
})