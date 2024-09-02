let botones = document.querySelectorAll('button');
botones[0].onclick = () => {
    botones[0].innerHTML = 'Cerrar Sesión';
}

let countUno = 0;
let countDos = 0;
botones[1].onclick = () => {
    alert('Gato atigrado was liked');
    countUno++;
    console.log(countUno)
    botones[1].innerText = countUno + ' ' + 'me gusta';
}

botones[2].onclick = () => {
    alert('Golden retriever was liked');
    countDos++;
    botones[2].innerText = countDos + ' ' + 'me gusta';
}

botones[3].onclick = () => {
    botones[3].style.display = "none";
}