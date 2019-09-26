
app.controller('contactoGmailController', ['ngDialog', '$scope', function(ngDialog, $scope) {
 
    $scope.normalDialog = function() {
              ngDialog.open({
              template: 'views/modal/conatactameCorreo.html',
              className: 'ngdialog-theme-default',
              scope: $scope,
          });
          
    }
    $scope.normalDialog.close=function(){
        ngDialog.close();
    }
    $scope.dialogWhatsApp = function(){
        ngDialog.open({
            template: 'views/modal/contactarmeWhatsApp.html',
            className: 'ngdialog-theme-default',
            scope: $scope
        })
    }
}]);