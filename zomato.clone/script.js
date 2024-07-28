document.getElementById('reviewForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const rating = document.getElementById('rating').value;
    const review = document.getElementById('review').value;

    const reviewItem = document.createElement('div');
    reviewItem.classList.add('review-item');

    reviewItem.innerHTML = `
        <h4>${name} (${rating} stars)</h4>
        <p>${review}</p>
    `;

    document.getElementById('reviews').appendChild(reviewItem);

    document.getElementById('reviewForm').reset();
});
