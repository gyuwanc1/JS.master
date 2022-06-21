
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

{
  let book = { title:'java포켓 레퍼런스', publish:'기술평론사', price:26800 };  
  let {price, title, memo = '없음' } = book;
  console.log(title);
  console.log(price);  
  console.log(memo);
}

//중첩객체분해
{
  let book = { title:'java포켓레퍼런스', publish:'기술평론사', price:26800,other:{keywd:'java se 8', logo:'logo.jpg'}};
  let{title,other,other:{keywd}} = book;

  console.log(title);
  console.log(other);
  console.log(keywd);
}

//변수별명지정
{
  let book = {title: 'java포켓레퍼런스', publish:'기술평론사'};
  let{title:name, publish:company} = book;

  console.log(name);
  console.log(company);
}

console.clear();

//비교연산자 좌우의 항을 비교하여 true//false로 반환

{
  console.log(1 == true);
}

{
  var data1 = ['javascript', 'ajax', 'asp.net'];
  var data2 = ['javascript', 'ajax', 'asp.net'];
  console.log(data1 == data2);
  
  //false로 등록되는 이유는 참조형은 메모리상의 어드레스가 다르기때문. 
}

//등가(==),동치연산자(===)

{
  console.log('3.14E2'== 314); //true 지수표현
  console.log('0x10' == 16); // true 16진수표현
  console.log('1' == 1); // true
}

{
  console.log('3.14E2'=== 314); 
  console.log('0x10' === 16); 
  console.log('1' === 1);  //문자1과 숫자1의 차이 데이터형이 다르다
}

//조건연산자 = 3항연산자 (조건식 ? A :B)

{
  var x =80;
  console.log((x >=70)? '합격' : '불합격');
}

//논리 연산자

// && 좌우의 식이 모두 true인경우, ||좌우의 식이 어느쪽이든 true인경우, ! 식이 false인경우

{
  var x =1;
  var y =2;
  console.log( x === 1 && y ===1);
  console.log( x===1 || y ===1 );
}

//빈문자열, 숫자0, NaN, null, undefied는 false로 인식

// 단락회로평가->  &&연산자의 경우 좌측이 false 라고 판정된 시점에서 조건식 전부가 false가 되므로 우측식은 판정(실행)되지 않음
// ||연산자의 경우 좌측식이 true인 경우 조건식 전체가 반드시 true가 되므로 우측식은 실행되지 않는다.
{ 
  if(x ===1){console.log('안녕하세요')};
  x === 1 && console.log('안녕하세요'); //<-- 본래 이와같은 기술방법은 원칙상 피해야한다.
} //<-- 의미상 같은 뜻 


// {
//   var msg = '';
//   msg=msg || '안녕하세요 자바스크립트';
//   console.log(msg); 
// }

{ var msg;
  console.log(msg)
  msg = (msg === undefined ? '안녕하세요 자바스크립트' : msg);
  console.log(msg)
}

console.clear();

//delete연산자

//delete연산자는 성공시에 true, 실패시 false
{
  var ary = ['javascript','ajax','asp.net']
  console.log(delete ary[0]);
  console.log(ary);

  var obj = {x:1, y:2};
  console.log(delete obj.x);
  console.log(obj.x);
  console.log(obj)
  var obj2 = { x:obj, y:2};
  console.log(delete obj2.x);
  console.log(obj);

  var data1 = 1;
  console.log(delete data1);
  console.log(data1);

  data2 = 10;
  console.log(delete data2);
  console.log(data2);

  //배열요소를 삭제한 경우 해당하는 요소가 삭제되기만 할 뿐 뒤의 요소가 옮겨지는 것은 아니다.
  //프로퍼티를 삭제한 경우 해당하는 프로퍼치가 삭제될 뿐 참조객체가 삭제되는 것은 아니다.
  //명시적으로 선언된 변수를 삭제 할 수 없다.
}

{
  //typeof 연산자
  var num =1;
  console.log(typeof num); //결과 number

  var str = '안녕하세요';
  console.log(typeof str); // 결과 string

  var flag = true;
  console.log(typeof flag); // 결과 boolean

  var ary = ['JS', 'Ajax', 'asp.net'];
  console.log(typeof ary); //  결과 object 배열

  var obj= {x:1, y:2};
  console.log(typeof obj); //결과 object 오브젝트

}

