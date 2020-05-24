
app.factory('peticionesFactory', function($http){
    var url = 'http://localhost/frany_back/index.php/'
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
          },

          obtenerComentarios: function(){
            return  new Promise((resolve, reject) => {

                $http({
                    method : "GET",  
                    url: url+'comentarios'})
                    .then(async (res)=>{ 
                            var comentarios  = res.data.data;        
                            //  return await  fotos;
                            resolve(comentarios);
                    },function(error){
                        console.log(error);
                        reject(error);
                    })

            });
          },

          guardarComentario: function(json,successCallback){
              console.log(json)
              /*
              var jsontest={
                usuario:"prueba usuario",
                titulo:"prueba web titulo",
                comentario:"prueba web comentario"
              }
              */
              var params='json='+JSON.stringify(json)
              $http.post(url+'add_comentario',params,{headers:{'Content-Type':'application/x-www-form-urlencoded'}}
             
              ).then(
                  successCallback()
                  )
          }
    }
    return peticionesFactory;
});
