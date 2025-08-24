// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigosSecretos = [];
let listaAmigosSorteados = [];

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
    }

    //validamos que aun no se hayan sorteado todos los amigos
    if (listaAmigosSorteados.length === listaAmigosSecretos.length) {
        alert('Ya se han sorteado todos los amigos. Se reiniciará la lista.');
        //vaciamos las dos listas
        listaAmigosSorteados = [];
        listaAmigosSecretos = [];
        ////limpiar resultados mostrados
        document.getElementById('resultado').innerHTML = "";
        document.getElementById('listaAmigos').innerHTML = "";
        return;
    }

    let seleccionarAmigo;
    //seleccionamos un indice aleatorio y se repite hasta que salga un indice "amigo" no sorteado
    do {
        seleccionarAmigo = Math.floor(Math.random() * listaAmigosSecretos.length);
    } while (listaAmigosSorteados.includes(seleccionarAmigo));

    //agregamos a la lista de amigos sorteados
    listaAmigosSorteados.push(seleccionarAmigo);

    //obtenemos el nombre del amigo
    const amigoSecreto = listaAmigosSecretos[seleccionarAmigo];
    
    //mostramos el resultado en pantalla
    document.getElementById('resultado').innerHTML = `<li>${amigoSecreto}</li>`;
}    



