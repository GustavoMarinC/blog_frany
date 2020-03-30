app.directive('redesSociales',[function(){
    return{
        restrict : 'E',
        templateUrl: 'directivas/redesSociales.html',
        scope :{
            info : '='
        }
    }
}])