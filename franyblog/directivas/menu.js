app.directive('menuDirectiva',[function(){
    return{
        restrict : 'E',
        templateUrl: 'directivas/menu.html',
        scope :{
            info : '='
        }
    }
}])
