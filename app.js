let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    const amigoInput = document.getElementById('amigo');
    const nombreAmigo = amigoInput.value.trim(); // Eliminar espacios innecesarios

    if (nombreAmigo === '') {
        alert('Por favor, inserte un nombre.');
        return;
    }

    amigos.push(nombreAmigo);
    amigoInput.value = '';
    mostrarListaAmigos();
}

// Función para mostrar la lista de amigos en la interfaz
function mostrarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ''; 

    amigos.forEach((amigo) => {
        const listItem = document.createElement('li');
        listItem.textContent = amigo;
        listaAmigos.appendChild(listItem);
    });
}

// Función para mezclar los elementos de un array de manera aleatoria
function mezclarArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Intercambiar elementos
    }
}

// Función para realizar el sorteo de un amigo secreto
function sortearAmigo() {
    if (amigos.length < 2) {
        alert('Se necesitan al menos dos amigos para realizar el sorteo.');
        return;
    }

    const amigosMezclados = [...amigos];
    mezclarArray(amigosMezclados);

    let asignaciones = '';
    for (let i = 0; i < amigos.length; i++) {
        const amigo = amigos[i];
        let amigoSecreto;

        do {
            amigoSecreto = amigosMezclados[i === amigos.length - 1 ? 0 : i + 1];
        } while (amigoSecreto === amigo);

        asignaciones += `<p><strong>${amigo}</strong> es el amigo secreto de <strong>${amigoSecreto}</strong></p>`;
    }

    const resultado = document.getElementById('resultado');
    resultado.innerHTML = asignaciones;
}

// Remove the event listener as it is not needed
// document.getElementById('sortearButton').addEventListener('click', sortearAmigo);
