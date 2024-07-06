document.querySelector('.btn').addEventListener('click',()=>{
    document.getElementById('text_show').innerText='начало'
    function second() {
        document.getElementById('text_show').innerText='прошло 2 секунды'
    }
    setTimeout(second, 2000)
    function three() {
        document.getElementById('text_show').innerText='прошло 3 секунды'
    }

    setTimeout(three, 3000)
})

document.querySelector('.btn2').addEventListener('click', ()=>{
   document.getElementById('test_output').innerText='начало работы'
    function oneInrerval() {
        document.getElementById('test_output').innerText='прошла 1 секунда'
    }

    function twoInterval() {
        document.getElementById('test_output').innerText='прошло еще 2 секунды'
    }

    function tenInterval() {
        document.getElementById('test_output').innerText='прошло 10 секунд'
        clearInterval(timecode, 10000)
    }
    
    setTimeout(oneInrerval, 1000)
    let timecode= setInterval(twoInterval, 2000)
    setTimeout(tenInterval, 10000)
    
})