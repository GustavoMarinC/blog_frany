app.directive('galeriaModal',[function(){
  return {
    restrict : 'E',
    templateUrl: 'views/modal/galeriaModal.html' ,
    scope :{
      info : '='
  }
  }
}])