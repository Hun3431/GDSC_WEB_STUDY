const gameTrain = () => {
    const lastTarget =  document.getElementById('word')
    const word = lastTarget.innerText

    const target = document.getElementById('myword')
    const myword = target.value
    
    if(word[lastTarget.innerText.length - 1] === myword[0]) {
        alert('성공입니다~')
        document.getElementById('result').innerText = "🎊 성공입니다 🎊"
        lastTarget.innerText = myword
        target.value = ''
    } else {
        alert('입력 값을 확인해주세요..')
        document.getElementById('result').innerText = "입력 값을 확인해주세요..😭"

    }

    //if(target.innerText )
}

const pushEnter = () => {
    if(window.event.keyCode == 13) gameTrain()
}

const gameLotto = () => {
    let number = []
    for(let i = 0; i<6; ) {
        randnum = Math.floor(Math.random() * 100) % 45 + 1
        if(number.indexOf(randnum) === -1) number[i++] = randnum
    }
    for(let i = 0; i<6; i++){
        document.getElementById('num'+(i+1)).innerText = number[i]
    }
    alert('번호 생성 완료!😎')
}

