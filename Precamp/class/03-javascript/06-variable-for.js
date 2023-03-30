const children = ["철수", "영희", "훈이"]

for(let i = 0; i < 4; i ++) {
    console.log(children[i] + '입니다.');
}
// 철수입니다.
// 영희입니다.
// 훈이입니다.
// undefined입니다.

for(let i = 0; i < children.length; i ++) {
    console.log(children[i] + '입니다.');
}
// 철수입니다.
// 영희입니다.
// 훈이입니다.

let persons = [
    {name: "철수", age: 17},
    {name: "영희", age: 22},
    {name: "도우너", age: 5},
    {name: "그루트", age: 65},
    {name: "도비", age: 3}
]

for(let i = 0; i < persons.length; i ++) {
    if(persons[i].age >= 19) console.log(persons[i].name + "는 성인입니다.")
    else console.log(persons[i].name + "는 미성년자입니다.")
}
// 철수는 미성년자입니다.
// 영희는 성인입니다.
// 도우너는 미성년자입니다.
// 그루트는 성인입니다.
// 도비는 미성년자입니다.