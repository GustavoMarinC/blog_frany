app.controller('ContactameController',['ngDialog','$scope','$http',function(ngDialog,$scope,$http){
    $scope.sendEmail = sendEmail;
    $scope.asunto = '';
    $scope.mensaje = '';
    $scope.nombre= '';
    $scope.correo= '';
    $scope.dialogError = function(){
        ngDialog.open({
            template: 'views/modal/dialogError.html',
            className: 'ngdialog-theme-default',
            scope: $scope
        })
    }
    function sendEmail(){
        console.log('normalDialog'+$scope.normalDialog);
        if($scope.asunto && $scope.mensaje && $scope.nombre && $scope.correo){
   
                $http.post('http://franylife.com/model/main.php',
                {mensaje: $scope.mensaje,
                nombre:$scope.nombre,
                correo:$scope.correo,
                asunto:$scope.asunto}).
                    then(function(response){
                $scope.asunto = '';
                $scope.mensaje = '';
                $scope.nombre= '';
                $scope.correo= '';
               // $scope.success = "Envio correcto";
               console.log("Response::"+response);
               $scope.normalDialog.close();

            },function(error){
                console.log("error",error);
                $scope.normalDialog.close();
                $scope.error=error;
                $scope.dialogError();
                
            })
            
            
            
        }
   

            
    }

}])