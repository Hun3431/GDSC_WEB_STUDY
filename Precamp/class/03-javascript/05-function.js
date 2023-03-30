const randnum = () => {
    const rcolor = ['red', 'orange', 'yellow', 'green', 'darkgreen', 'skyblue', 'blue', 'pupple', 'lightgray', 'black']
    let num = String(Math.floor(Math.random() * 1000000)).padStart(6, '0')
    document.getElementById('number').innerText = num
    document.getElementById('number').style.color = rcolor[Math.floor(Math.random() * 10)%10]
    // document.getElementById('number').style.color = '#' + num
}