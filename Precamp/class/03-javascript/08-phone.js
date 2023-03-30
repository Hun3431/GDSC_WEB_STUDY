const changeFocus = (num, index) => {
    let phone1 = document.getElementById('p' + index).value
    if(phone1.length === num){
        document.getElementById('p' + (index + 1)).focus()
    }
}