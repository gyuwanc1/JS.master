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

  console.log(ary1.slice(1,2));//takae
  console.log(ary1.splice(1,2, 'kakeya', 'yamaguchi')) //치환
  console.log(ary1); // [sato, kakeya, yamaguchi, hio, saito, sato]
}

//스택

// 스택(stack)이란 나중에 들어간 것이 먼저나오는 구조 또는 먼저넣은것이 나주에 나오는 구조
// 스택은 push/pop 매소드로 구현

//array_stack
{
  var data = [] //변수 data라는 array 생성
  data.push(1); //변수data라는 array에 1삽입
  data.push(2); //변수data라는 array에 2삽입
  data.push(3); //변수data라는 array에 2삽입
  console.log(data);
  console.log(data.pop()); //나중에 들어간 3 제거
  console.log(data);
  console.log(data.pop()); //2제거
  console.log(data);
  console.log(data.pop()); //1제거
  console.log(data);
}

//큐

//큐(Queue)란 먼저넣은것이 먼저나오는 구조 대기행렬
//큐는  push/shift로 구현

{
  var data = []
  data.push(1);  
  data.push(2);
  data.push(3);
  console.log(data.shift());
  console.log(data.shift());
  console.log(data.shift());
}

//스플라이스

//splice 란 배열의 임의의 부분에 요소를 추가하거나 기존의 요소를 치환, 삭제

{
  var data = ['sato', 'takae', 'osada', 'hio', 'saitoh'];
  console.log(data.splice(3,2, 'yamada','suzuki')); //hio,saitoh
  console.log(data);
  console.log(data.splice(3,2));
  console.log(data);
  console.log(data.splice(1,0, 'tanaka'));
  console.log(data);
}