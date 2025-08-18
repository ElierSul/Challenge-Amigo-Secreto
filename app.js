// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigosSecretos = [];

function agregarAmigo() {
    let nombreAmigo = document.getElementById('amigo').value;

    //Este if sirve para evitar ingresar valores vacios
    if (nombreAmigo.trim() === "") {
        alert('Por favor ingresa un nombre correcto');
        return;
    }

    listaAmigosSecretos.push(nombreAmigo);
    mostrarAmigos();

    //limpiamos el input despues de agregar a cada uno
    document.getElementById('amigo').value = "";
}

function mostrarAmigos() {
    const ul = document.getElementById('listaAmigos');
    ul.innerHTML = "";

    listaAmigosSecretos.forEach(function(amigo){
        const li = document.createElement('li');
        li.textContent = amigo;
        ul.appendChild(li);
    });
}

