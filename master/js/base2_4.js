
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

// 대입연산자


//기본형 =  값전달 
{
  var x = 1;
  var y = x;
  x = 2;
  console.log(y);// 1
  
}


//참조형 = 값을 보관하고있는 어드레스가 변수에 보관 ->참조전달
{
  var data1 = [0,1,2];
  var data2 = data1;
  data1[0] = 5;
  console.log(data2);
}
//변수는 메모리 그자체 번호를 부여한 주소를 가지고 있음. 