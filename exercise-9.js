Exercise 9 Week 2

//Mengenal penggunaan function

// Tugas 1

function shoutOut(){
  
  console.log('Halo Function!');
}

console.log(shoutOut());


// Tugas 2

function calculateMultiply(num1,num2){
  result=num1*num2;
  return result;
}

var num1 = 5;
var num2 = 6;

// Tugas 3

function processSentence(name,age,address,hobby){
  result = 'Nama saya '+name+' umur saya '+age+' tahun, alamat saya di '+address+', dan saya punya hobby yaitu '+hobby+'!';
  return result;
}

var name = "Agus";
var age = 30;
var address = "Jln. Malioboro, Yogjakarta";
var hobby = "gaming";

var fullSentence = processSentence(name,age,address,hobby);
console.log(fullSentence); 


var hasilPerkalian = calculateMultiply(num1,num2);
console.log(hasilPerkalian);
