// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigosSecretos = [];

function agregarAmigo() {
    let nombreAmigo = document.getElementById('amigo').value;

    //Este if sirve para evitar ingresar valores vacios
    if (nombreAmigo.trim() === "") {
        alert('Por favor inserte un nombre');
        return;
    }

    //agregamos el nombre a la lista
    listaAmigosSecretos.push(nombreAmigo);
    mostrarAmigos();

    //limpiamos el input despues de agregar un amigo
    document.getElementById('amigo').value = "";
}

function mostrarAmigos() {

    //se limpia la lista antes de volver a mostrarla
    const ul = document.getElementById('listaAmigos');
    ul.innerHTML = "";

    listaAmigosSecretos.forEach(function(amigo){
        const li = document.createElement('li');
        li.textContent = amigo;
        ul.appendChild(li);
    });
}

function sortearAmigo() {
    //validamos que la lista no este vacia
    if (listaAmigosSecretos.length === 0) {
        alert('Ingresa algunos amigos para sortear');
        return;
    }else{
        const seleccionarAmigo = Math.floor(Math.random() * listaAmigosSecretos.length);
        const amigoSecreto = listaAmigosSecretos[seleccionarAmigo];
        console.log(seleccionarAmigo);

        document.getElementById('resultado').innerHTML = `<li>${amigoSecreto}</li>`;
    }

    
}


