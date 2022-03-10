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

{
  const a =['1','3','2','4','7','5'];
  console.log(a);
  console.log(a.pop());
  console.log(a.sort());
  console.log(a.pop());
  console.log(a)
  console.log(a.shift());
  console.log(a)
  console.log(a.unshift('100'));
  console.log(a);
  console.log(a.splice(0,3,'1000'))
  console.log(a);
  console.log(a.push('3','6','7'));
  console.log(a);
  console.log(a.sort());
  console.log(a.slice(0,2));
  console.log(a);
}

{
let str= '킹 콩';
console.log(str.length);  
console.log(str.indexOf('킹'));
}

{
let a = '우 리 나 라 좋 은 나 라';
let part= a.split(' ');
for(let i = 0; i<part.length;i++){
console.log(part[i]);
}

}


{

  const myArr = [1, 2, 3, 4, 5];

myArr.forEach((currentElement, index, array) => {
    console.log(`요소: ${currentElement}`);
    console.log(`index: ${index}`);
    console.log(array);
});
}