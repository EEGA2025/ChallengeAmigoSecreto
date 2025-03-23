// Array to hold friends' names
let amigos = [];

document.addEventListener('DOMContentLoaded', () => {
    // Add event listener for "Añadir" button
    const addButton = document.getElementById('addButton');
    addButton.addEventListener('click', agregarAmigo);

    // Add event listener for "Sortear amigo" button
    const drawButton = document.getElementById('drawButton');
    drawButton.addEventListener('click', sortearAmigo);
});

function agregarAmigo() {
    const amigoInput = document.getElementById('amigo');
    const amigoNombre = amigoInput.value.trim();

    if (amigoNombre) {
        // Add amigo to the list of friends
        amigos.push(amigoNombre);

        // Update the list of friends in the UI
        const listaAmigos = document.getElementById('listaAmigos');
        const li = document.createElement('li');
        li.textContent = amigoNombre;
        listaAmigos.appendChild(li);

        // Clear the input field
        amigoInput.value = '';
    } else {
        alert("Por favor, ingrese un nombre.");
    }
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Por favor, agrega al menos dos amigos para hacer el sorteo.");
        return;
    }

    // Shuffle the friends list to randomize the assignment
    const shuffledAmigos = [...amigos];
    for (let i = shuffledAmigos.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledAmigos[i], shuffledAmigos[j]] = [shuffledAmigos[j], shuffledAmigos[i]]; // Swap elements
    }

    // Display the results
    const resultadoElement = document.getElementById('resultado');
    resultadoElement.innerHTML = ''; // Clear previous results

    // Now, each friend will be paired with the next one in the shuffled list (circular pairing)
    shuffledAmigos.forEach((amigo, index) => {
        const secretFriendIndex = (index + 1) % shuffledAmigos.length; // Circular pairing
        const secretFriend = shuffledAmigos[secretFriendIndex];
        const li = document.createElement('li');
        li.textContent = `${amigo} es el amigo secreto de ${secretFriend}`;
        resultadoElement.appendChild(li);
    });
}
