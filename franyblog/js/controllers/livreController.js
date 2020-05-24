app.controller('LivreController',['$scope','peticionesFactory','$window',async ($scope,peticionesFactory,$window)=>{
    let data = await peticionesFactory.obtenerComentarios();
    $scope.title='LIVRE!!!';
    $scope.comentar=false;
    $scope.comentario=data;
    $scope.usuario='';
    $scope.titulo='';
    $scope.comentarioNuevo='';

    console.log('comentarios',$scope.comentario);
    $scope.addComentario;
    
    
    $scope.addComentario =  ()=>{

        console.log('flag1',$scope.usuario,$scope.titulo,$scope.comentarioNuevo)
         peticionesFactory.guardarComentario(
            {
                usuario:$scope.usuario,
                titulo:$scope.titulo,
                comentario:$scope.comentarioNuevo
            },
            ()=>{
                $window.location.reload();
            }
        );
      

    }
    $scope.formularioComentar=()=>{
        $scope.comentar=true;
        $scope.usuario='';
        $scope.titulo='';
        $scope.comentarioNuevo='';
    }
    $scope.$digest();
}]);
