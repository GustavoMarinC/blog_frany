app.controller('LingeiriController',['ngDialog','$scope','peticionesFactory',  async function(ngDialog,$scope,peticionesFactory){
    $scope.ubicacion = '!#/lingerie'
    let fotos = await peticionesFactory.obtenerFotos('lingerie');
    $scope.arregloFotos = fotos;
    $scope.$digest();

    console.log(randomizarArray($scope.arregloFotos));
    
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
}])