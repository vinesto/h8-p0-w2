//Week 2 Exercise 6

//1. Menggunakan Looping Menggunakan While

var num1=0;
var num2=20;

console.log('LOOPING PERTAMA');
 while (num1<=20){
   console.log(num1+' - I love coding');
   num1=num1+2;
 }

console.log('LOOPING KEDUA');
  while (num2>=0){
    console.log(num2+' - I will become fullstack developer');
    num2=num2-2;
  }

//2. Melakukan Looping Menggunakan For

console.log('LOOPING PERTAMA');
for(var num1=1; num1<=20; num1++){
  console.log(num1+ ' - I love coding');
}
console.log('LOOPING KEDUA');
for (var num2=20; num2>0; num2--){
  console.log(num2+ ' - I will become fullstack developer');
}

//3. Angka ganjil dan genap

//ganjil-genap

for(var count1=1; count1<=100; count1++){
  if (count1 %2===0){
    console.log('GENAP');
  }else{
    console.log('GANJIL');
  }
}

//counter kelipatan 3

for(var count3=1; count3<=100; count3++){
  if (count3 %3===0){
    console.log(count3+' KELIPATAN ' +count3);
  }else{
    console.log('')
  }
}

//counter kelipatan 6
for(var count6=1; count3<=100; count6++){
  if (count6 %6===0){
    console.log(count6+' KELIPATAN ' +count6);
  }else{
    console.log('')
  }
}

//counter kelipatan 10
for(var count10=1; count10<=100; count10++){
  if (count10 %10===0){
    console.log(count10+' KELIPATAN ' +count10);
  }else{
    console.log('')
  }
}  