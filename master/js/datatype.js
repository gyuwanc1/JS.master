var x = '안녕하세요, JavaScript !';
console.log(x);
x = 100;

console.log(x);

// window.alert('안녕하세요. 자바스크립트!\n열심히 공부합시다. ')

let name = '하은'
let str = `안녕하세요 ${name}씨.`;

console.log(str);

{
let data = ['javascript', 'ajax', 'asp.net'];
console.log(data[2]);
}

{
  let data = ['javascript',['jquery','prototype.js'],'asp.net'];
  console.log(data[1][0]);
}

{
  var obj = {x:1, y:2, z:3};
  console.log(obj.x)
  console.log(obj['x'])
  
}
{
var x= 80;
console.log((x >= 70)? '합격' : '불합격');
}

{
// var msg = ''
// msg = msg || '안녕하세요';
// console.log(msg);
var msg = (msg === undefined ? '안녕하세요 자바스크립트' : msg);
console.log(msg);
}
