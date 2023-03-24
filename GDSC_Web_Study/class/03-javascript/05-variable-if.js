// 데이터 타입, 연산자 실습
console.log(1+1)        // 2
console.log(1+'만원')    // 1만원
console.log(1+'1')      // 11
console.log(1-'1')      // 0
console.log('123' == 123)  // true
console.log('123' === 123) // false
console.log(true && false) // false
console.log(true || false) // true
console.log(!false)        // true


// 조건문 실습 1
if(1 + 1 === 2) console.log('정답입니다.')
else console.log('오답입니다.')
// 정답입니다.

if(true) console.log('정답입니다.')
else console.log('오답입니다.')
// 정답입니다.

if(false) console.log('정답입니다.')
else console.log('오답입니다.')
// 오답입니다.

if(0) console.log('정답입니다.')
else console.log('오답입니다.')
// 오답입니다.

if(1) console.log('정답입니다.')
else console.log('오답입니다.')
// 정답입니다.


// 조건문 실습 2
const profile = {
    name : "철수",
    age : 12,
    school : "다람쥐초등학교"
}

if(profile.age > 19) {
    console.log('성인입니다.')
} else if(profile.age > 7) {
    console.log('학생입니다.')
} else {
    console.log('어린이입니다.')
}
// 학생입니다.