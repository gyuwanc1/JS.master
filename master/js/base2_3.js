{
var x = '안녕하세요,자바스크립트'


console.log(x);

//기본형과 참조형에 따라 데이터의 취급방식이 다르다

//리터럴: 데이터형에 보관되는 값 자체 값의 표현방법

//문자 리터럴
'안녕하세요, 자바스크립트!'
"안녕하세여, 자바스크립트!"

"He's Hero!"

console.log('He\'s Hero!!'); //<== (\')를 단순히 (')로 인식

// window.alert('안녕하세요,자바스크립트! \n열심히공부합시다! ')
}

{
  //template str

  let name = '하은';
  // let str = '안녕하세요.'+name+'씨. \n 오늘도 좋은날씨네요'
  let str = `안녕하세요.${name}씨.
  오늘도 좋은 날씨네요!`
  console.log(str);

}

{
  var data = ['자바스크립트', 'Ajax', 'asp,net'];
  console.log (data[0]);
  //배열명[인덱스번호]
}

{
  var data= ['javascript', ['jQuery', 'prototype'],'asp.net'];
  console.log(data[1][0]);
  //배열명[인데스번호] [인덱스번호]
  
}

{
  var obj = { x:1, y:2, z:3};// {키명(프로퍼티명):값, 키명(프로퍼티명),값}
  console.log(obj.x); //객체명.프로퍼티명
  console.log(obj['x']); // 객체명['프로퍼티명']

}

{
  var y;
  var obj = {a:123};
  console.log(y); //(값이 설정 되지 않음)
  console.log(obj.b); // (프로퍼티가 존재하지 않는다)
}

//undefined -> 정의되지않았다, 본래부터 참조하려는 생각을 하지 않았다

//null -> 비어있다.
