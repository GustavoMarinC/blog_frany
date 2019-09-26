app.controller('SportController',['ngDialog','$scope',function(ngDialog,$scope){
$scope.ubicacion='#!/sport';
$scope.arregloFotos=randomizarArray([
    {
        url:'img/sport/imgFrany401.jpg'
    },
    {
        url:'img/sport/imgFrany402.jpg'
    },
    {
        url:'img/sport/imgFrany403.jpg'
    },
    {
        url:'img/sport/imgFrany404.jpg'
    },
    {
        url:'img/sport/imgFrany406.jpg'
    },
    {
        url:'img/sport/imgFrany407.jpg'
    },
    {
        url:'img/sport/imgFrany408.jpg'
    }
]
);
$scope.fotoSelecionada;
    $scope.abrirImgen = function(index){
        console.log(index);
        $scope.fotoSelecionada = $scope.arregloFotos[index];
        console.log( $scope.fotoSelecionada);
        ngDialog.open({
            template: 'views/modal/modalGaleriaBase.html',
            className: 'ngdialog-theme-default',
            scope: $scope,
        });
    };
    $scope.btnPrev = function(){
        $scope.fotoSelecionada = navArray(PREVITEM,$scope.fotoSelecionada,$scope.arregloFotos);
        console.log($scope.fotoSelecionada);
     }
     $scope.btnNext = function(){
         $scope.fotoSelecionada = navArray(NEXITEM,$scope.fotoSelecionada,$scope.arregloFotos);
         console.log($scope.fotoSelecionada);
     }
}]);
