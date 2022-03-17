
var msg; //변수 msg 선언

var x;
var y; //복수의 변수명령기술 선언 가능

var msg = '안녕하세요, 자바스크립트'
var x =10;
var y = 10;
console.log(x);
console.log(y);


// let msg1; //기본적인 선언
// //let x,y; // 복수의 변수 선언
// let greeting = '안녕하세요, 자바스크립트'; //초기값을 설정

// let msg= '뭐냐뭐냐';
// let msg = '후후후'; 
//let 은 변수선언의 중복을 허가하지 않음

var msg='뭐냐뭐냐';
var msg='후후후';

console.log(msg);

//var의 변수선언은 중복허용  마지막에 쓰인 값으로 덮어쓰인다.

//상수선언

var price = 100;
console.log(price * 1.08);

const Tax = 1.08;

console.log(price * Tax);



