// 1. Contador de tiempo
function actualizarContador() {
    const fechaInicio = new Date(2022, 2, 5); 
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

// 2. Lluvia de corazones
function crearCorazon() {
    const contenedor = document.getElementById('lluvia-corazones');
    if(!contenedor) return;
    const corazon = document.createElement('div');
    corazon.classList.add('corazon-caido');
    corazon.innerText = '💗'; 
    corazon.style.left = Math.random() * 100 + "vw";
    const duracion = Math.random() * 5 + 3;
    corazon.style.animationDuration = duracion + "s";
    contenedor.appendChild(corazon);
    setTimeout(() => { corazon.remove(); }, duracion * 1000);
}
setInterval(crearCorazon, 300);

// 3. LOGICA DEL SOBRE (Importante)
const elSobre = document.querySelector('.sobre');
elSobre.addEventListener('click', function() {
    // Al hacer clic, añade o quita la clase que activa el CSS
    this.classList.toggle('abierto');
});

// 4. Activar música al primer clic en cualquier lado
document.addEventListener('click', () => {
    const audio = document.getElementById('musica');
    if(audio) audio.play().catch(e => console.log("Esperando música..."));
}, { once: true });
// Lógica para ir al juego
const btnJuego = document.getElementById('btn-juego');
// Busca esta parte al final de tu script.js
btnJuego.addEventListener('click', () => {
    // NUEVA LÍNEA: Guardamos el segundo exacto antes de irnos
    const audioPrincipal = document.getElementById('musica');
    if(audioPrincipal) {
        localStorage.setItem('tiempoMusica', audioPrincipal.currentTime);
    }

    for(let i = 0; i < 30; i++) {
        setTimeout(crearCorazon, i * 50);
    }
    
    setTimeout(() => {
        window.location.href = "juego.html"; 
    }, 1500);
});