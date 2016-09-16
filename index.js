
function iterativeLog(array){
  array.forEach((element, index, array) => { // don't need the ,array 
    debugger
    console.log(`${index}: ${element}`)
  })
}

function iterate(callback){
  var letters = ['a', 'b', 'c', 'd'];
  letters.forEach(callback);
  return letters;
}

function doToArray(array, callback) {
  array.forEach(callback);
}
