import { ENDPOINT } from './client.js';

export default async function getAllGames() {
    try {
        const response = await fetch(`${ENDPOINT}`);
        return await response.json();
    } catch (error) {
        console.error('Failed to fetch game', error);
        showToast('Failed to fetch game', 'error');
    }
}
