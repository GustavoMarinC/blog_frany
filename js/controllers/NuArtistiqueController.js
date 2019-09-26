app.controller('NuArtistiqueController',['ngDialog','$scope',((ngDialog,$scope)=>{
    $scope.ubicacion='#!/nuArtistique';
    $scope.arregloFotos=randomizarArray([
        {
            url:'img/nuartistique/imgFrany100.jpg'
        },
        {
            url:'img/nuartistique/imgFrany102.jpg'
        },
        {
            url:'img/nuartistique/imgFrany103.jpg'
        },
        {
            url:'img/nuartistique/imgFrany104.jpg'
        },
        {
            url:'img/nuartistique/imgFrany105.jpg'
        },
        {
            url:'img/nuartistique/imgFrany106.jpg'
        },
        {
            url:'img/nuartistique/imgFrany107.jpg'
        },
        {
            url:'img/nuartistique/imgFrany108.jpg'
        },
        {
            url:'img/nuartistique/imgFrany109.jpg'
        },
        {
            url:'img/nuartistique/imgFrany110.jpg'
        },
        {
            url:'img/nuartistique/imgFrany111.jpg'
        },
        {
            url:'img/nuartistique/imgFrany112.jpg'
        },
        {
            url:'img/nuartistique/imgFrany113.JPG'
        }
     ] );
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
})])