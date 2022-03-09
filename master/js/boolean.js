{
  var x= 9;
  if(x >= 10) {
    console.log('변수 x는 10이상이다')
  }else{
    console.log('변수 x는 10 미만이다')
  }
}

{
var x = 30;
if(x >=20){
  console.log('변수 x는 20이상')
} else if (x >=10){
  console.log('변수 x는 10이상')
} else {
  console.log('변수 x는 10 미만이다')
};

}

{
  let x =30;
  if(x >= 10){
    if(x >=20){
      console.log('뱐수 x는 20 이상이다')
    }else {
      console.log('변수 x는 10 이상 20미만이다')
    }
  }else{
    console.log('변수 x는 10 미만이다')
  }
}

{ 
  let rank = 'b';
  switch(rank){
    case 'a':
      console.log('a랭크입니다.');
      break;
    case 'b':
      console.log('b랭크입니다.');
      break;
    case 'c':
      console.log('c랭크입니다.');
      break;
    default :
      console.log('아무랭크도 아닙니다');
      break;
  }
  
}

//구구단
{
  for (var x = 2; x <10 ; x++){
    for (var y = 1; y <10 ; y++){
      console.log( x+'x'+ y+'=', x*y);
    }
  }
}

{
  var result = 0;
  for (var i = 1; i <=100; i++){
    result += i;
    if(result >1000){
      break;
    }
    console.log('합계값이  1000을 넘은 것은' + i);
  }

}