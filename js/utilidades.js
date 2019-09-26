const NEXITEM = "next";
const PREVITEM = "prev";
function randomizarArray(array){
 return array.sort(function() {return Math.random() - 0.5});
}

function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

function navArray(option, selecItem, array){
    if(option === NEXITEM){
        console.log('bandera1',array[array.indexOf(selecItem)+1]);
        if(array[array.indexOf(selecItem)+1]){
            return array[array.indexOf(selecItem)+1];
        }else{
            return array[0];
        }
    }else if(option === PREVITEM){
        if(array[array.indexOf(selecItem)-1]){
            return array[array.indexOf(selecItem)-1];
        }else{
            return array[array.length-1];
        }
    }
}