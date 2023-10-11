import { ENDPOINT } from './client.js';

export default async function getGameById(id) {
    try {
        const response = await fetch(`${ENDPOINT}/${id}`);
        return await response.json();
    } catch (error) {
        console.error('Failed to fetch all games', error);
        showToast('Failed to fetch games', 'error');
    }
}
