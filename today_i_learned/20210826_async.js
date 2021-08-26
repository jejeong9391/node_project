/*2021-08-26 1-7(P.63)
1. 동기 비동기 차이 
2. 익명함수, 화살표함수
3. 프로미스와 제너레이터 
4. async/awit를 이용한 비동기 처리 
*/

//익명함수 사용하기 (일반함수, 화살표함수 = 동일처리)
const f1= function(s){ console.log(s.inverse.blue)} 
const f2= (s)=>{console.log(s.underline.yellow)}
f3('nomal function')
f4('arrow fuction')

// 익명함수를 변수의 매개변수로 사용하기