import updateWishlistBadge from './updateWishlistBadge';
import showToast from './showToast';

/**
 * Toggle if a game is wishlisted or not
 *
 * @param {string} id - id of the game
 * @returns {void}
 */

function toggleWhishlist(id) {
    let wishlist = JSON.parse(localStorage.getItem('wishlist'));
    if (!wishlist) {
        wishlist = [];
    }
    const i = wishlist.indexOf(id);
    if (i > -1) {
        wishlist.splice(i, 1);
        showToast('Game removed from wishlist!', 'info');
    } else {
        wishlist.push(id);
        showToast('Game added to wishlist!', 'success');
    }
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    if (window.location.pathname === '/wishlist.html') {
        location.reload();
    } else {
        updateWishlistBadge();
    }
}
