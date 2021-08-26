/*2021-08-25 
1. 제너레이트 함수 
 Generator : 함수의 실행을 중간에 멈췄다가 재개할 수 있는 기능 (ECMAScript2015에서 추가된 기능)
 참고 : https://www.youtube.com/watch?v=qi24UqyJLgs

-------------------------------------------
* 제너레이트 기초 
1. (호출하면 함수 '실행결과'를 반환하는 일반함수와 달리)제너레이트 함수를 호출하면 '객체만' 반환됨. 함수 본문코드는 실행되지않음.
-> next()메서드를 사용하여 함수를 실행시키고 그 값을 반환받음. 

2. (한번 호출하면 함수 끝까지 실행완료 후 값을 반환하는 일반함수와 달리) 제너레이트 함수는 함수내부의 yield구문을 만나면 실행이 중단됨. 
 1) 그전까지 실행한 값을 반환.
 2) 멈춘 yield문의 값(value)와 실행완료여부 객체를 함께 반환함. 

*/
function* fn(){
    console.log("첫번째 실행")
    const a = 1
    yield 1

    console.log("두번째 실행 | 현재 a값 : "+ a)
    a++
    yield 2

    console.log("세번째 실행 | 현재 a값 : "+a)
    yield 3
    return "끝!"
}
const z = fn()
//console.log() // 디버그 콘솔에서 실행할 수 있음. vs코드를 껐다켜면 적용되는데, 이렇게 사용하진 않을텐데....
console.log(z.next())
console.log(z.next())
////// html 올리는것 부터 하고 테스트하자ㅠㅠㅠ
