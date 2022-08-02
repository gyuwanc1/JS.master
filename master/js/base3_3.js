//배열 조작하기 Array객체

{
  var ary = ['베트맨', '슈퍼맨', '아쿠아맨'];
  console.log(ary);
}

{
  var ary = new Array('배트맨','슈퍼맨','아쿠아맨'); //지정요소로 배열을 생성
  var ary = new Array(); //빈배열을 생성
  var ary = new Array(10); //지정사이즈(인데스 0~9)로 빈배열 생성
  var ary = [];
  console.log(ary);
}

//Array 객체의 멤버

{
  var ary1 = ['sato', 'takae', 'osada', 'hio', 'saitoh', 'sato'];
  var ary2 = ['yabuki', 'aoki', 'moriyama', 'yamada'];

  console.log(ary1.length); //6
  console.log(Array.isArray(ary1)); //true 지정한 객체가 배열인가?
  console.log(ary1.toString()); //요소의 형식으로 문자전환
  console.log(ary1.indexOf('sato')); //일치하는 첫번째 요소 
  console.log(ary1.lastIndexOf('sato')); // 일치하는 마지막요소
  console.log(ary1.concat(ary2)); //배열 연결
  console.log(ary1.join('/')); // 배열내의 요소를 /로 연결
  console.log(ary1.slice(1)); //start+1~end
}