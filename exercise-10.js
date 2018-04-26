Exercise 10 Week 2

function bandingkanAngka(angka1, angka2) {
  if(angka1<angka2){
    result='true';
  } else if(angka1>angka2){
    result='false';
  } else{
    result='-1';
  }
  return result;
}

console.log(bandingkanAngka(5, 8));
console.log(bandingkanAngka(5, 3)); 
console.log(bandingkanAngka(4, 4)); 
console.log(bandingkanAngka(3, 3)); 
console.log(bandingkanAngka(17, 2)); 