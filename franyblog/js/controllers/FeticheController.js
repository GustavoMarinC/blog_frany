app.controller('FeticheController',['ngDialog','$scope','peticionesFactory',async (ngDialog,$scope, peticionesFactory)=>{
    $scope.ubicacion='#!/fetiches';
    $scope.fotoSelecionada;
    $scope.fotoSelecionadaIndex;

    let fotos = await peticionesFactory.obtenerFotos('fetiche');
    $scope.arregloFotos = fotos;
    $scope.$digest();    

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