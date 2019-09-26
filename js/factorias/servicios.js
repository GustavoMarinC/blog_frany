
app.factory('peticionesFactory', function($http){
    var url = 'http://franylife.com/gustavoamc/frany_back/index.php/'
    var peticionesFactory = {
        obtenerFotos :   function(tabla){
            return  new Promise((resolve, reject) => {

                $http({
                    method : "GET",  
                    url: url+'fotos/'+tabla})
                    .then(async (res)=>{ 
                            var fotos  = res.data.data;        
                            //  return await  fotos;
                            resolve(fotos);
                    },function(error){
                        console.log(error);
                        reject(error);
                    })

            });
          }
    }
    return peticionesFactory;
});