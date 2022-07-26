//프로그램상에서 취급하는 대상을 객체(개체)로 생각해서 그렇게 만들어진 객체를 중심으로
//코드를 조립해 나갖는 수법을 객체지향이라고 부른다

/* property(프로퍼티): 객체의 상태나 특성을 나타내기 위한 정보 예) 폼을 나타내는 Form객체
  폼의 이름,전송한 URl, 폼에 포함된 요소군 등
*/

/* method(메소드): 객체를 조작하기 위한 도구 예) 폼을 나타내는 Form객체
  폼 송신, 폼클리어, 폼무효화
*/


//new 연산자

/*
var 변수명 = new 객체명([인수,...])
*/

//객체에서 객체를 초기화 하기 위해 객체와 동일한 이름의 메소드가 준비되어있다. <==생성자

/* 프로퍼티//메소드 호출

변수명.프로퍼티명 [= 설정값];
변수명.메소드명([인수[,...]]);

*/

//정적 메소드/프로퍼티

/*
객채명.프로퍼티명 [= 설정값];
객채명.메소드명([인수[,...]]);
*/

//내장형 객체

//string.length
{
  var str = '안녕하세요!';
  console.log(str.length);
}

// 기본형 데이터는 NEW연산자를 사용하지 않는다.
console.clear();

//문자열 조작하기
{
  var str1 = '뜰에 뜰에 뜰에는 닭이 있다';
console.log(str1.indexOf('뜰')) //결과:0 선두부터 검색
console.log( str1.lastIndexOf('뜰')) //결과:6 뒤에서 부터 검색
console.log(str1.indexOf('뜰',3)) //결과:3 4번째부터 오른쪽으로 검색
console.log(str1.lastIndexOf('에',5)) //결과:6번째 문자부터 왼쪽방향검색
console.log(str1.indexOf('가든')) //결과:-1 불일치
console.log(str1.startsWith('뜰'))//결과:true 지정된 문자열로 시작하는가?
console.log(str1.endsWith('뜰'))//결과:fulse 지정된 문자열로 끝나는가?
console.log(str1.includes('뜰'))//결과 true 지정된 문자열이 포함하는가?
}

{
  var str2 = 'WINGS프로젝트';
  var str3 = '♧싸서';
  var str4 = '  wings  ';

  console.log(str2. charAt(4)); //결과:S (5번째 문자를 추출)
  console.log(str2.slice(5,8)) //결과: 프로젝 (6~8번재 문자 추출)
  console.log(str2.substring(5,8)) //결과: 프로젝 (6~8번재 문자 추출)
  console.log(str2.split('S')) // 결과: WING, 프로젝트
  console.log(str2.concat('유한회사'))//결과: Wings프로젝트 유한회사
  console.log(str2.repeat(2)) //결과:WINGS프로젝트WINGS프로젝트
}

//부분문자열

//(1) 인수 start > 인수end 인경우  : end+1 ~start문자까지 추출 
//substring
{
  var str = 'WINGS프로젝트'
  console.log(str.substring(8,5)) // 프로젝 (6(5+1)~8번째 문자열 추출)
  console.log(str.slice(8,5)) //공백
}

//(2)인수 start/end에 음수 지정  : substring은 무조건0으로 인식하지만 slice는 문자열의 끝에서부터 인식

{
  var str = 'WINGS프로젝트'
  console.log(str.substring(5,-2))
  console.log(str.slice(5,-2))
}
