
var x = '안녕하세요,자바스크립트'
x = 100;

console.log(x);

//기본형과 참조형에 따라 데이터의 취급방식이 다르다

//리터럴: 데이터형에 보관되는 값 자체 값의 표현방법

//문자 리터럴
'안녕하세요, 자바스크립트!'
"안녕하세여, 자바스크립트!"

"He's Hero!"

console.log('He\'s Hero!!'); //<== (\')를 단순히 (')로 인식

// window.alert('안녕하세요,자바스크립트! \n열심히공부합시다! ')

{
  //template str

  let name = '하은';
  // let str = '안녕하세요.'+name+'씨. \n 오늘도 좋은날씨네요'
  let str = `안녕하세요.${name}씨.
  오늘도 좋은 날씨네요!`
  console.log(str);

}