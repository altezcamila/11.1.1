// Función para realizar la solicitud a la PokeAPI
function consultarPokeAPI(pokemonId) {
    const apiUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonId}/`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            // Manipula los datos aquí y muestra la información debajo del botón de buscar
            const pokemonInfoDiv = document.getElementById('pokemonInfo');
            pokemonInfoDiv.innerHTML = `
                <h2>Nombre: ${data.name}</h2>
                <img src="${data.sprites.front_default}" alt="Imagen de ${data.name}">
            `;
        })
        .catch(error => {
            console.error('Hubo un error en la solicitud:', error);
            const pokemonInfoDiv = document.getElementById('pokemonInfo');
            pokemonInfoDiv.innerHTML = 'Hubo un error en la solicitud.';
        });
}

// Buscar Pokémon cuando se haga clic en el botón
const buscarBoton = document.getElementById('buscarPokemon');
buscarBoton.addEventListener('click', () => {
    const pokemonNumberInput = document.getElementById('pokemonNumber');
    const pokemonNumber = parseInt(pokemonNumberInput.value);
    
    if (!isNaN(pokemonNumber)) {
        consultarPokeAPI(pokemonNumber);
    } else {
        alert('Por favor, ingresa un número válido de Pokémon.');
    }
});
