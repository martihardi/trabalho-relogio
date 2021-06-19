//teste1

// var passo;

// for (passo = 0; passo < 5; passo++) {
// console.log('ande um passo para o leste');
// }

//teste 2

// for(i = 0; i < 10; i++) {
// alert(i)
// }

//teste 3

// for(i = 10; i > 0; i--) {
// alert(i)
// }

//teste relogio

function starttime() { 
    var tempo = new Date();
    var h = tempo.getHours();
    var m = tempo.getMinutes();
    var s = tempo.getSeconds();

    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML =  h + ':' + m + ':' + s;
    tempo = setTimeout('starttime()', 500);
}

function checkTime(i) {
    if (i < 10) {
        i = '0' + i;
    }
    return i;
}

