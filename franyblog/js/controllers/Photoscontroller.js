app.controller('PhotosController',['ngDialog','$scope','peticionesFactory',async function(ngDialog,$scope,peticionesFactory){
    $scope.ubicacion = '!#/lingerie'
    $scope.arregloFotos=[];
    /*
    let fotosSport = await peticionesFactory.obtenerFotos('sport');
    let fotoslingerie = await peticionesFactory.obtenerFotos('lingerie');
    let nu_artistique = await peticionesFactory.obtenerFotos('nu_artistique');
    let fotosFashion = await peticionesFactory.obtenerFotos('fashion');

    $scope.arregloFotos = fotosSport.concat(fotoslingerie,nu_artistique,fotosFashion);
 */

let photos = await peticionesFactory.obtenerFotos('photos');
$scope.arregloFotos = photos;
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
        console.log("Entro a la function");
        $scope.fotoSelecionada = navArray(PREVITEM,$scope.fotoSelecionada,$scope.arregloFotos);
        console.log($scope.fotoSelecionada);
     }
     $scope.btnNext = function(){
         $scope.fotoSelecionada = navArray(NEXITEM,$scope.fotoSelecionada,$scope.arregloFotos);
         console.log($scope.fotoSelecionada);
     }
}])