let num = String(Math.floor( Math.random() * 1000000)).padStart(6, '0')
console.log(num)
// 6자리 랜덤 숫자 생성

/* 
Math.floor() : 버림
Math.random() : 랜덤 숫자 생성
String() : 문자열로 형변환
padStart(n, v) : 값을 n자리수로 만들어주며 빈 값은 앞에서부터 v를 채워줌
*/