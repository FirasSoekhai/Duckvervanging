const vullen = document.querySelectorAll('.tekst button')
document.getElementsByClassName('info')[0].style.height = document.getElementsByClassName('tekst')[0].clientHeight +'px';

function resetknop() {
    document.getElementById("informatie").innerHTML = " ";
}
for(let i=0; i<vullen.length; i++) {
    vullen[i].addEventListener('click', click);
}
function click() {
    document.getElementById('informatie').innerHTML = document.getElementById('informatie').innerHTML + this.dataset.info;
}

