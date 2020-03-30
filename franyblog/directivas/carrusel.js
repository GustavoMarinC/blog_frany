app.directive('carruselDirectiva',[function(){
    return{
        restrict : 'E',
        templateUrl: 'directivas/carrusel.html',
        scope :{
            info : '='
        }
    }
}])
