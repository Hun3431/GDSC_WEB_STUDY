let classmates = ["철수", "영희", "훈이"]

console.log(classmates)     // ['철수', '영희', '훈이']

console.log(classmates[0])  // 철수
console.log(classmates[1])  // 영희
console.log(classmates[2])  // 훈이

console.log(classmates.includes("훈이"))    //true
console.log(classmates.includes("맹구"))    //false

console.log(classmates.length)  // 3
console.log(classmates.push("맹구"))
console.log(classmates.length)  // 4
console.log(classmates)         // ['철수', '영희', '훈이', '맹구']
console.log(classmates.pop())   // 맹구
console.log(classmates.length)  // 3
console.log(classmates)         // ['철수', '영희', '훈이']
