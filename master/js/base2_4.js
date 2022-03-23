
console.log(10+1);
console.log('10'+1);

var today= new Date();
console.log (1234+today);


{
  var x =3;
  var y = x++;
  console.log(x);
  console.log(y);
}

{
  var x =3;
  var y = ++x;
  console.log(x);
  console.log(y);
}

{
  console.log(0.2 * 3);
  console.log(0.2 * 3 === 0.6);
  console.log(((0.2 * 10) * 3)/10); //0.6
  console.log(((0.2 * 10) * 3) === 0.6 * 10); //6 
}