const mask = () => {
    let maskEmail = []

    if(!email.includes('@')) {
        console.log('Email 형식이 아닙니다.')
        return ''
    } else {
        let userMail = email.split('@')[0]
        let company =  email.split('@')[1]
    
        for(let i = 0; i < userMail.length - 4; i ++) {
            maskEmail.push(userMail[i])
        }
        for(let i = 0; i < 4; i ++) {
            maskEmail.push('*')
        }
        return maskEmail.join('') + '@' + company;
    }
}

const email = "hun_3431kakao.com"

let maskingMail = []

maskingMail = mask(email)

console.log(maskingMail)    // hun_****@kakao.com