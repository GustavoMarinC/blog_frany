app.controller('LivreController',['$scope',function($scope){
    $scope.title='LIVRE!!!';
    $scope.comentar=false;
    $scope.comentarios={
        status:'success',
        data: [
            {
                id:1,
                usuario:'Usuario1',
                titulo:'Titulo1',
                comentario:'Esto es un comentario de prueba de texto'
            },
            {
                id:2,
                usuario:'Usuario2',
                titulo:'Titulo2',
                comentario:'Esto es un comentario de prueba de texto'
            },
            {
                id:3,
                usuario:'Usuario3',
                titulo:'Titulo3',
                comentario:'Esto es un comentario de prueba de texto'
            }
        ]
    };

    $scope.formularioComentar=()=>{
        $scope.comentar=true;
    }
}]);
