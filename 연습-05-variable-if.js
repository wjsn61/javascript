// 데이터 타입 연산자 실습
1 + 1
// 2
1 + '만원'
// '1만원'
1 + "1"
// '11'
1 - '1'
// 0
"코드" + "캠프"
// '코드캠프'
"123" == 123
// true
"123" === 123
// false
true && true
// true
true && false
// false
false || true
// true
!false
// true
!true
// false
// 조건문 실습1
if (1 + 1 === 2) {
    console.log("정답입니다")
} else {
    console.log("틀렸습니다")
}
// VM4613:2 정답입니다
undefined
if (true) {
    console.log("정답입니다")
} else {
    console.log("틀렸습니다")
}
// VM4664:2 정답입니다
undefined
if (!true) {
    console.log("정답입니다")
} else {
    console.log("틀렸습니다")
}
// VM4693:4 틀렸습니다
undefined
if (0) {
    console.log("정답입니다")
} else {
    console.log("틀렸습니다")
}
VM4713: 4 틀렸습니다
// undefined

// 조건문 실습 2
const profile = {
    name: "철수",
    age: 12,
    school: "다람쥐초등학교"
}
// undefined
if (profile.age >= 20) {
    console.log("성인입니다")
} else if (profile.age >= 8) {
    console.log("학생입니다")
} else if (profile.age > 0) {
    console.log("어린이입니다")
}
// VM5837:4 학생입니다