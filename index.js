const colors = require('colors'); // 터미널에 다양한 색으로 문자열을 표현할 수 있는 모듈 ㅎ.ㅎ

const s1 = "Luce sicut stellae";
const s2 = "Opportunities are never lost";
const s3 = "The other fellow takes those you miss.";

console.log(s1.underline.rainbow);
console.log(s2.inverse.blue);
console.log(s3.underline.yellow);