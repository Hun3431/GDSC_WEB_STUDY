let time = 10;

setInterval(() => {
    if(time >= 0) {
        console.log(time)
        time = time -1
    }
}, 1000)