const colors = require('colors') // 터미널에 다양한 색으로 문자열을 표현할 수 있는 모듈 ㅎ.ㅎ

const s1 = "Luce sicut stellae"
const s2 = "Opportunities are never lost"
const s3 = "The other fellow takes thoseyou miss.";

console.log(s1.underline.rainbow)
//console.log(s2.inverse.blue)
//console.log(s3.underline.yellow)


//2021-08-26 익명함수 사용하기 (일반함수, 화살표함수 = 동일처리)
const f1= function(s){ console.log(s2.inverse.blue)} 
const f2= (s)=>{console.log(s3.underline.yellow)}
f1('a')
f2('b')

// 익명함수를 변수의 매개변수로 사용하기
