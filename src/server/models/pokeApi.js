import axios from 'axios';

const API_KEY = process.env.API_KEY;

const fetchPokemonCards = async () => {
    try {
        const response = await axios.get('https://api.pokemontcg.io/v2/cards', {
            headers: {
                'X-Api-Key': API_KEY
            }
        });

        const cards = response.data.data; // The API response structure may vary
        console.log(cards);
    } catch (error) {
        console.error('Error fetching data from Pokémon TCG API:', error);
    }
};

fetchPokemonCards();