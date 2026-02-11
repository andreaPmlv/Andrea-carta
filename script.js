

function actualizarContador() {
    const fechaInicio = new Date(2022, 2, 5); // Tu fecha: 5 de Marzo 2022
    const ahora = new Date();
    let diferencia = ahora - fechaInicio;

    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

    document.getElementById("contador-tiempo").innerHTML = 
        `${dias} días ${horas} h ${minutos} m ${segundos} s`;
}
setInterval(actualizarContador, 1000);
actualizarContador();


function crearCorazon() {
    const contenedor = document.getElementById('lluvia-corazones');
    const corazon = document.createElement('div');
    corazon.classList.add('corazon-caido');
    corazon.innerText = '💗'; 
    corazon.style.left = Math.random() * 100 + "vw";
    corazon.style.fontSize = Math.random() * 20 + 10 + "px";
    const duracion = Math.random() * 5 + 3;
    corazon.style.animationDuration = duracion + "s";
    contenedor.appendChild(corazon);
    setTimeout(() => { corazon.remove(); }, duracion * 1000);
}
setInterval(crearCorazon, 300);


document.addEventListener('click', () => {
    const audio = document.getElementById('musica');
    audio.play().catch(e => console.log("Esperando interacción..."));
}, { once: true });
document.getElementById('btn-amor').addEventListener('click', () => {
  
    for(let i = 0; i < 20; i++) {
        setTimeout(crearCorazon, i * 50);
    }
    alert("¡Eres lo mejor que me ha pasado! ❤️");
});
document.getElementById('boton-magico').addEventListener('click', () => {
    // Genera 30 corazones de golpe
    for(let i = 0; i < 30; i++) {
        setTimeout(crearCorazon, i * 50);
    }
    // Opcional: un mensaje lindo al hacer clic
    alert("¡Eres lo mejor que me ha pasado!");
});