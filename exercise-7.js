//Exercise 7 Week 2


//1.Menyusun Barisan Bintang

var rows1=5;
for(i=0; i<=rows1; i++){
  console.log('*');
}

//2. Menyusun Barisan Bintang dengan Nested Looping

var row1=6;

for (i=0; i<row1; i++){
  var bin='';
  for(j=0; j<row1; j++){
    bin=bin+'*'
  }
    console.log(bin);
}

//3. Menyusun Barisan Tangga Bintang dengan Nested Looping

var row1=6;
var bin='';

for (i=0; i<row1; i++){
    bin=bin+'*'
    console.log(bin);
  }