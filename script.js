

function Relogio() {
    let data = new Date();
    let hr = data.getHours();
    let min = data.getMinutes();
    let s = data.getSeconds();

    let tempo_total = hr + ":" + min + ":" + s;
    let tempo = window.document.getElementById('section_hr');
    tempo.innerHTML = tempo_total;
}
setInterval(Relogio,500)