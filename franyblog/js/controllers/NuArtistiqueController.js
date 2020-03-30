app.controller('NuArtistiqueController',['ngDialog','$scope','peticionesFactory', async(ngDialog,$scope,peticionesFactory)=>{
    $scope.ubicacion='#!/nuArtistique';

    let fotos = await peticionesFactory.obtenerFotos('nu_artistique');
    $scope.arregloFotos = fotos;
    $scope.$digest();
    
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