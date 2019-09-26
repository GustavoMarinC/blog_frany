app.controller('LingeiriController',['ngDialog','$scope',function(ngDialog,$scope){
    $scope.ubicacion = '!#/lingerie'
    $scope.arregloFotos=randomizarArray(
    [
        {
            url: 'img/lingerie/imgFrany201.jpeg'
        },
        {
            url: 'img/lingerie/imgFrany202.jpg'
        },
        {
            url: 'img/lingerie/imgFrany203.jpg'
        },
        {
            url: 'img/lingerie/imgFrany204.jpg'
        },
        {
            url: 'img/lingerie/imgFrany205.jpg'
        },
        {
            url: 'img/lingerie/imgFrany206.jpg'
        },
        {
            url: 'img/lingerie/imgFrany207.jpg'
        },
        {
            url: 'img/lingerie/imgFrany208.jpg'
        },
        {
            url: 'img/lingerie/imgFrany209.jpg'
        },
        {
            url: 'img/lingerie/imgFrany210.jpg' 
       },
        {
            url: 'img/lingerie/imgFrany216.jpg'
        },
        {
            url: 'img/lingerie/imgFrany214.jpg'
        },
        {
            url: 'img/lingerie/imgFrany215.jpg'
        },
        {
            url: 'img/lingerie/imgFrany2018.jpg'
        }
    ]
    );
    
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