
app.controller('contactoGmailController', ['ngDialog', '$scope', function(ngDialog, $scope) {
 
    $scope.normalDialog = function() {
              ngDialog.open({
              template: 'views/modal/conatactameCorreo.html',
              className: 'ngdialog-theme-default',
              scope: $scope,
          });
    }
}]);