var num
var isStarted = false;

const auth = () => {
    if(!isStarted) {
        isStarted = true
        document.getElementById('joinbtn').disabled = false
        num = String(Math.floor(Math.random()*1000000)).padStart(6, '0')
        console.log(num)
        let time = 180
        alert('인증번호 발급 완료')
        const interval = setInterval(() => {
        if(time >= 0) {
            time--
            document.getElementById('time').innerText = Math.floor(time/60) +':'+String(time%60).padStart(2, '0')
        }
        else {
            isStarted = false
            document.getElementById('joinbtn').disabled = true
            document.getElementsById('time').innerText = '만료'
            clearInterval(interval)
        }
        }, 1000)
    }
    else {
        alert('이미 인증번호를 발급 받았습니다.')
    }
}

const join = () => {
    const usernum = Number(document.getElementById('countinput').value)

    if(num == usernum) {
        alert('정상적으로 가입이 완료되었습니다.')
    } else {
        alert('인증번호를 확인해주세요😭😭')
    }
}