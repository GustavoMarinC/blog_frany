var app = angular.module('MainApp',['ngRoute','ngAnimate', 'ngDialog']);


app.config(['$routeProvider',function($routeProvider){
    $routeProvider.when('/',{
        templateUrl : 'views/principal.html',
        controller : ''
    })
    .when('/aprops',{
        templateUrl:'views/APROPOS.html',
        controller:''
    }).when('/Blogs',{
        templateUrl:'views/Blog.html',
        controller: ''
    }).when('/photos',{
        templateUrl:'views/photos.html',
        controller: ''
    }).when('/sport',{
        templateUrl:'views/sport.html',
        conytroller: ''
    }).when('/fashion',{
        templateUrl:'views/fashion.html'
    }).when('/lingeiri',{
        templateUrl:'views/lingeiri.html'
    }).when('/nuArtistique',{
        templateUrl:'views/nuArtistique.html'
    }).when('/videos',{
        templateUrl: 'views/videos.html'
    }).when('/contacto',{
        templateUrl: 'views/contacto.html'
    }).when('/livre',{
        'templateUrl':'views/livedors.html',
    }).when('/loginChamare',{
        'templateUrl':'views/loginChamare.html',
    }).when('/fetiches',{
        'templateUrl':'views/fetiches.html',
    }).when('/portrait',{
        'templateUrl':'views/portrait.html',
    }).when('/photosCharme',{
        'templateUrl':'views/photosCharme.html',
    })
}]);
app.controller('CarouselController',CarouselController);
function CarouselController($scope, $timeout) {
    $scope.index = 0;
    $scope.images = [];
    $scope.image = "";

    $scope.setImages = function(images) {
        $scope.images = images;
        $scope.image = images[0];
        $scope.index = 0;
    };

    $scope.nextImage = function() {
        $scope.index = ($scope.index + 1) % $scope.images.length;
        $scope.image = $scope.images[$scope.index];
    };

    $scope.prevImage = function() {
        $scope.index = ($scope.index - 1 >= 0 ? $scope.index - 1 : $scope.images.length - 1);
        $scope.image = $scope.images[$scope.index];
    };

    var nextImageTimeout = function() {
        $scope.nextImage();
        $timeout(nextImageTimeout, 5 * 1000);
    };

    $timeout(nextImageTimeout, 5 * 1000);    
}

