
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

//상수 
{
  const tax = 1.08;
  //tax = 1.1; //오류
  
} // 기본형은  값의 재대입시 오류

{
  const data = [1,2,3];
  //data = [4,5,6]; <- 오류 -1
  data[1] = 10; // -2
  console.log(data);

  // 1번은 배열 자체를 제대입하기에 불가하여 오류지만 2번은 내용만 변경하고있기에 상수위반은 아님. 
}

//분할대입(배열)
{
  var data= [56,40,26,82,19,17,73,99];
  var x0 = data[0]
  var x1 = data[1]
  var x2 = data[2]
  var x3 = data[3]
  var x4 = data[4]
  var x5 = data[5]
  var x6 = data[6]
  var x7 = data[7]

  console.log(x0) //56
}

{
  let data = [56,40,26,82,19,17,73,99];
  // let [x0,x1,x2,x3,x4,x5,x6,x7] = data;
  // console.log(x0);
  // console.log(x1);
  // console.log(x2);
  // console.log(x3);
  // console.log(x4);
  // console.log(x5);
  // console.log(x6);
  // console.log(x7);
  let[x0,x1,x2,...other] = data;
  console.log(x0);
  console.log(x1);
  console.log(x2);
  console.log(other);

}

{
  let x = 1;
  let y = 2;
  [x,y] = [y,x]
  console.log(x,y);
}

