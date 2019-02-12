<<<<<<< HEAD
function forLoop(array){
  for (let i = 0; i < 25; i++) {
    if (i === 1){
      array.push("I am 1 strange loop.")
    }
    else array.push(`I am ${i} strange loops.`)
}
return array
}

=======
>>>>>>> 8b78051800bb508640f7d74679fc3c2e1903defb

















function whileLoop(n){
  while (n > 0){
    console.log(n);
    --n
  }
  return 'done'
}




var i = 0;


function incrementVariable(){
  i = i + 1;
  return i;
}



function doWhileLoop(num){
  do {
    console.log("I run once regardless.")
  }
  while (incrementVariable() <= num);
}

















