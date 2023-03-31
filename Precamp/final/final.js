let validationEmail = false;
let validationName = false;
let validationPassword = false;
let validationPhone = false;
let validationNumber = false;
let validationAddress = false;
let validationGender = false;


const changeFocus = (num, index) => {
    let phone1 = document.getElementById('phone' + index).value
    if(phone1.length === num){
        document.getElementById('phone' + (index + 1)).focus()
    }
}

const maxNumber = () => {
    p1 = document.getElementById('phone1').value.length;
    p2 = document.getElementById('phone2').value.length;
    p3 = document.getElementById('phone3').value.length;

    if(p1 === 3 && p2 === 4 && p3 === 4) {
        console.log('true')
        document.getElementById('send__btn').disabled = false;
    }
}

let isStarted = false;
let interval;
const sendNumber = () => {
    if(!isStarted) {
        isStarted = true;
        document.getElementById('check__btn').disabled = false;
        document.getElementById('send__btn').disabled = true;
        document.getElementById('timer').style.color = '#0068FF';
        let num = String(Math.floor(Math.random()*1000000)).padStart(6, '0')
        document.getElementById('send__num').innerText = num;
        let time = 180;
        interval = setInterval(() => {
            if(time > 0) {
                document.getElementById('timer').innerText = Math.floor(time / 60) + ':' + String(time%60).padStart(2, '0');
                time --;
            }
            else {
                document.getElementById('check__btn').disabled = true;
                document.getElementById('send__btn').disabled = false;
                document.getElementById('check__btn').innerText = '만료';
                document.getElementById('timer').style.color = 'red';
                isStarted = false;
                clearInterval(interval);
            }
        }, 1000)
    }
}

const validateNumber = () => {
    clearInterval(interval);
    document.getElementById('check__btn').style.color = 'gray';
    document.getElementById('check__btn').style.background = 'white';
    document.getElementById('check__btn').style.borderColor = '#D2D2D2';

    document.getElementById('phone1').disabled = true;
    document.getElementById('phone2').disabled = true;
    document.getElementById('phone3').disabled = true;

    validationNumber = true;
    validationPhone = true;

    alert('휴대폰 인증이 완료되었습니다.');
}

const validateEmail = () => {
    const userEmail = document.getElementById('email').value;
    if(userEmail.length > 0) {
        validationEmail = true;
        document.getElementById('validation__email').innerText = '';
    } else {
        validationEmail = false;
        document.getElementById('validation__email').innerText = '이메일을 입력해주세요';
    }
}

const validateName = () => {
    const userName = document.getElementById('email').value;
    if(userName.length > 0) {
        validationName = true;
        document.getElementById('validation__name').innerText = '';
    } else {
        validationName = false;
        document.getElementById('validation__name').innerText = '이름을 입력해주세요.';
    }
}

const validatePassword = () => {
    const userPassword1 = document.getElementById('password1').value;
    const userPassword2 = document.getElementById('password2').value;
    if(userPassword1.length > 0) {
        document.getElementById('validation__password1').innerText = '';
        if(userPassword1 === userPassword2) {
            validationPassword = true;
            document.getElementById('validation__password2').innerText = '';
        } else {
            validationPassword = false;
            document.getElementById('validation__password2').innerText = '상단의 비밀번호와 동일하게 입력해주세요.';
        }
    } else {
        document.getElementById('validation__password1').innerText = '비밀번호를 입력해주세요.';
        document.getElementById('validation__password2').innerText = '상단의 비밀번호와 동일하게 입력해주세요.';
    }
}

const validateAddress = () => {
    const userAddress = document.getElementById('address__select').value;
    if(userAddress === '지역을 선택하세요.') {
        validationAddress = false;
        document.getElementById('validation__address').innerText = '지역을 선택해주세요.';
    } else {
        validationAddress = true;
        document.getElementById('validation__address').innerText = '';
    }
}

const validateGender = () => {
    const userGender = document.getElementById('woman').checked || document.getElementById('man').checked;
    if(userGender){
        validationGender = true;
        document.getElementById('validation__gender').innerText = '';
    } else {
        validationGender = false;
        document.getElementById('validation__gender').innerText = '성별을 선택하세요.';
    }
}

const join = () => {
    validateEmail();
    validateName();
    validatePassword();
    validateAddress();
    validateGender();
    if(validationAddress && validationEmail && validationGender && validationName && validationNumber && validationPassword && validationPhone) {
        alert('코드캠프 가입을 축하합니다!');
    } else {
        alert('입력 값을 확인하세요.');
    }
}