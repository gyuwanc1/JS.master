/*
1.기술된 순서대로 처리 실시 = 순차구조
2.조건에따라 처리를 분기 = 선택구조
3.특정의 처리를 반복실행 = 반복구조

=> 순차 선택 반복을 조합하는 것을 구조화 프로그래밍
*/

//조건에 따른 분기처리하기 if문

//조건식이 true/false중 어느쪽인지에 따라 대응 하는 명령문

/* if (조건식){조건식이 true인경우 실행}
else {
  조건식이 false인경우 실행
} */

{
  var x =15;
  if(x >=10){
    console.log('변수x는 10이상이다');
  }else{
    console.log('변수x는 10 미만이다');
  }
  /*
  X값이 10이상인경우 x는 10이상이다
  X값이 10미만인경우 x는 10미만이다
  */
}

{
  var x2=15;
  if(x>=10) {
    console.log('변수 x는 10 이상이다');
  }
}

//else if블록에 의한 다중분기

/*
if(조건식){
  조건식 1이 true인 경우에 실행하는 명령
} else if(조건식2){
  조건식2가 true인경우에 실행하는 명령
}
...
}else{
  모든조건식이 false인경우에 실행하는 명령
}
*/

{
  var x = 30;
  if(x >=20){
    console.log('변수 x는 20이상이다');
  }else if (x >=10){
    console.log('변수x는 10 이상이다');
  }else{
    console.log('변수x는 10미만이다 ');
  }
  //if명령에는 복수의 조건이 들어맞는 경우에도 실행되는 블록은 처음 한개뿐이다!!
}

{
  var x2 = 30;
  if(x >=10){
    console.log('변수 x는 10이상이다');
  }else if (x >=20){
    console.log('변수x는 20 이상이다');
  }else{
    console.log('변수x는 10미만이다 ');
  }

  //첫번째 조건식이 일치하여 두번째 조건식이 무시되는 것을 확인할 수 있다.
}

//if명령문은 중첩 구조 가능
{
  var x=30;
  if(x >=10){
    if(x >=20){
      console.log('변수 x는 20이상이다');
    }else{
      console.log('변수x는 10이상 20미만이다');
    }
  }else{
    console.log('변수x는 10미만이다');
  }
}
//위와같이 제어명령을 내부에서 중첩하여 사용하는 것을 NEST라고 한다.

/* 주의!! 중괄호{...}는 생략 할 수 있지만 버그를 일으키기 쉽기 때문에 {...}꼭 써줄것! */

console.clear();

/* switch 문 */

/*
switch(식){
  case 값1:
    '식 = 값1'인 경우에 실행되는 명령
  case 값2:
    '식 = 값2'인 경우에 실행되는 명령
  ...
  default:
    식의 값이 모든 값에 조건상 일치하지 않을 경우에 실행되는 명령
}
*/

/* switch문의 순서

1.선두의 식이 우선평가
2. 1의 값에 일치하는 case실행
3.일치하는 case가 없을경우 default블록을 호출

*/

{
  var rank = 'B';
  switch(rank){
    case 'A':
      console.log('A랭크입니다');
      break
    
    case 'B':
      console.log('B랭크입니다');
      break
    
    case 'C':
      console.log('C랭크입니다');
      break
    
    default:
      console.log('아무랭크도 아닙니다');
      break
  }

  //break 는 현재의 case으로 부터 빠져나오기 위한 제어명령
  //switch문은 자동으로 case에서 빠져나오지 못한다. 그래서 break문을 이용해 명시적으로 빠져나와야한다. 
}

/* 의도한 break생략 */

/* 복수의 case에 break사용*/

{
  var rank2 = 'B';
  switch(rank2){
    case 'A':
    case 'B':
    case 'C':
      console.log('합격');
      break;
    case 'D':
      console.log('불합격')
      break;
  }
}

/* 주의!! switch식과 case값은 '==='연산자로 비교한다 */

{
  var x ='0';
  switch(x){
    case 0 :
      console.log(0);
  }
//<- 실행되지 않는다 그이유는 숫자 0과 문자'0'의 데이터타입이 다르기 때문이다.
}

console.clear();

/* while/do...while */

/*
while(조건식){
  조건식이 true일 때 실행되는 명령
}
*/

/* 
do {
  조건식이 true일 때 실행되는 명령
}while(조건식);

!!do...while의 명령의 끝부분에는 문장의 종료를 나타내는 세미콜론이 필요하다
*/


// while문 예시 
{
  var x = 8;
  while(x < 10){
    console.log('x의값은'+ x);
    x++;
  }
}

//do...while문 예시
{
  var x2 = 8;
  do{
    console.log('x2의값은' + x2);
    x2++;
  }while(x2 < 10);
}

/*
while문은 전치판정으로 루프가 시작되기 전부터 조건식이 false인경우 결과로 나타남

do...while문은 후치판정 조건식의 참/거짓에 상관없이 반드시 한번은 루프가 처리됨
*/



/*무한루프 
두 예시에서 X++;를 삭제하면 초기값인 8을 계속 유지하기 때문에 종료할 수 없는 상태로 무한루프에
빠진다.

일부러 무한루프를 만드는 경우도 있지만 수동으로 루프를 탈충하는 방법을 만들어놔야한다.
*/

console.clear();

/* for문 */

// 미리지정된 횟수 만큼만 반복처리하는 명령문

/*
for (초기식(값): 루프 계속 조건식; 증감식){
  루프내에서 실행하는 명령
}
*/
{
  for(var x = 8; x<10; x++){
    console.log('x의값은'+x);
  }
}

//예제
{
for(var i=1, j=1; i<5; i++, j++){
  console.log('i * j는'+ i * j);
}
}

/* for...in */

//지정된 연상 배열(object)의 요소를 추출하여 선두부터 순서대로  처리

/*
for(가변수 in 연상배열){
  루프내에서 실행하는 명령
}

for(var ket in data){

}
*/

//예제

{
  var data = {apple:150, orange:100, banana:120}
  for(var key in data){
    console.log(key + '=' + data[key]);
  }
}

/* 배열에서는 for...in을 이용하지 않는다.*/

{
  var data= ['apple','orange','banana']
  for(var key in data){
    console.log(data[key]);
  }
}

{
  var data= ['apple','orange','banana']
  Array.prototype.hoge = function(){}
  for (var key in data){
    console.log(data[key]);
  }
  //<- 배열기능의 확장까지 표시하게 된다.
}

// !! for...of
/*
ES2015에서 추가된 명령, Array,object 반복지/생성자 처리가능
*/

/*
for(가변수 of 열거 가능한 객체){
  루프 태네엇 실행하는 명령
}
<- for...in과 거의 비슷
*/

//예제

{
  var data=['apple', 'orange', 'banana']
  Array.prototype.hoge = function(){}
  for (var value of data){
    console.log(value);
  }
}
//for...in에서는 index번호가 건네지며, for...of에서는 값을 열거하고있다.

// break/continue 명령

// 루프를 강제적으로 중단하는 것 - break

{
  var result=0;
  for(var i = 1; i <= 100; i++){
    result +=i;
    if(result > 1000) {break;}
  }
  console.log('합겨값이 1000을 넘은것은' + i);

  //결과:합계값이 1000을 넘은 것은 45
  //break명령은 if명령과 합께 사용하는 것이 일반적  
}

// 현재의 루프만을 건너뛰고 다음 루프를 계속해서 실행하는 것 continue

{
  var result2 = 0;
  for(var i = 1; i < 100; i++){
    if (i % 2 === 0){continue;}
    result2 += i;
  }
  console.log('합계' + result2);
}

// 중첩된 루프 한번에 빠져나오기

//중첩된 루프안에서 break, continue를 사용할 경우 디폴트가장 안쪽의 루프를 탈출,스킵한다.

//예제
{
  for(var i = 1; i < 10; i++){
    for (var j =1; j <10; j++){
      var k = i * j
      if(k > 30){break;}
      document.write(k+ '&nbsp');
    }
    document.write('<br />');
  }
}

{
  kuku:
  for(var i = 1; i < 10; i++){
    for (var j =1; j <10; j++){
      var k = i * j
      if(k > 30){break kuku;}
      document.write(k+ '&nbsp');
    }
    document.write('<br />');
  }
}
//레이블명을 지정하여 중첩된 루프를 데외하고 나열
console.clear();

/* 예외처리 try, catch, finally */

/*
try {
  예외가 발생할지 모를 명령
} catch(예외정보를 취할 변수) {
  예외가 발생했을 시의 명령
} finally{
  예외의 유무에 관계없이 최종적으로 실행되는 명령
}
*/

{
  var i = 1;
  try{
    i= i * j; //예외발생
  } catch (e){
    console.log(e.message);
  } finally{
    console.log('처리가완료되었다');
  }
}

console.clear();

/* JS의 위험한 구문 금지 - strict모드 */

//자바스크립트의 함정을 발견하여 오류로 통지해 주는 구조 - strict모드

{
  'use strict'; //<-- 이후의 전체 스크립트 strict모드로 해석
}

{
  function hoge(){
    'use strict'; // <-- 함수의 스크립트가 strict모드로 해석 
  }
}