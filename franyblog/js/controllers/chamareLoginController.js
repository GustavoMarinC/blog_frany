app.controller('ChamareLoginController',['ngDialog','$scope','$http','$window',function(ngDialog,$scope,$http,$window){

    console.log('chamare...')

    $scope.usuario ='';
    $scope.password ='';

    

    $scope.login = function (){
        if($scope.usuario == 'frany' && $scope.password == 1234){
            console.log('Logeo correcto...')
            $window.location.href = '#!/photosCharme';
        }else{
            alert('Usuario o contraseña invalidos');
        }
    }

}])