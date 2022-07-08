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

