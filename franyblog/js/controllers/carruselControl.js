app.controller('carruselControl',['ngDialog','$scope','$http','$timeout',function(ngDialog,$scope,$http,$timeout){

    $scope.index = 0;
    $scope.images = [
        "img/carrusle/imgCarrusel1.jpg",
        "img/carrusle/imgCarrusel2.jpg",
        "img/carrusle/imgCarrusel3.jpg",
        "img/carrusle/imgCarrusel4.jpg",
        "img/carrusle/imgCarrusel5.jpg",
        "img/carrusle/imgCarrusel6.jpg",
        "img/carrusle/imgCarrusel7.jpg",
        "img/carrusle/imgCarrusel8.jpg",
        "img/carrusle/imgCarrusel9.jpg",
        "img/carrusle/imgCarrusel10.jpg"
    ];

    $scope.image = $scope.images[$scope.index];


    $scope.nextImage = function() {
        $scope.index = ($scope.index + 1) % $scope.images.length;
        $scope.image = $scope.images[$scope.index];
    };


    var nextImageTimeout = function() {
        $scope.nextImage();
        $timeout(nextImageTimeout, 5 * 1000);
    };

    $timeout(nextImageTimeout, 5 * 1000);   

}])