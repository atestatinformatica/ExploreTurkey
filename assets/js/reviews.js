function submitReview(event) {
    event.preventDefault();
    if (!isLoggedIn || !currentUserEmail) {
        alert("Please log in to leave a review.");
        return;
    }

    const form = event.target;
    const city = form.querySelector("#city-select").value;
    const text = form.querySelector("textarea").value.trim();
    const rating = parseInt(form.querySelectorAll("select")[1].value);

    if (!city || !text) return;

    const key = `reviews_${city}`;
    let reviews = JSON.parse(localStorage.getItem(key)) || [];

    // Remove existing review from this user
    reviews = reviews.filter(r => r.email !== currentUserEmail);

    reviews.push({ email: currentUserEmail, text, rating });
    localStorage.setItem(key, JSON.stringify(reviews));

    form.reset();
    renderAllReviews();
}

function renderAllReviews() {
	const container = document.getElementById("all-reviews-container");

    const container = document.querySelector(".testimonial-carousel");
    if (!container) return;

    const initialReviews = container.innerHTML; // salvăm review-urile hardcodate
    container.innerHTML = initialReviews;       // păstrăm ce era inițial

    const cities = [
        "istanbul", "ankara", "izmir", "antalya", "bursa",
        "adana", "gaziantep", "konya", "trabzon", "kayseri",
        "mardin", "sanliurfa", "cappadocia", "pamukkale"
    ];

    cities.forEach(city => {
        const reviews = JSON.parse(localStorage.getItem(`reviews_${city}`)) || [];
        reviews.forEach(r => {
            const reviewHTML = `
                <div class="single-testimonial-box">
                    <div class="testimonial-description">
                        <div class="testimonial-info">
                            <div class="testimonial-img">
                                <img src="assets/images/users/user-placeholder.jpg" alt="User" style="border-radius:50%; width:70px; height:70px;">
                            </div>
                            <div class="testimonial-person">
                                <h2>${r.email.split('@')[0]}</h2>
                                <h4>${city.charAt(0).toUpperCase() + city.slice(1)}</h4>
                                <div class="testimonial-person-star">
                                    ${"★".repeat(r.rating)}${"☆".repeat(5 - r.rating)}
                                </div>
                            </div>
                        </div>
                        <div class="testimonial-comment">
                            <p>"${r.text}"</p>
                        </div>
                        ${r.email === currentUserEmail ? `<button onclick="deleteReview('${city}', '${r.email}')" class="review-delete-btn" style="margin-top:10px;">Delete</button>` : ""}
                    </div>
                </div>
            `;
            container.innerHTML += reviewHTML;
        });
    });
}




function deleteReview(city, email) {
    let reviews = JSON.parse(localStorage.getItem(`reviews_${city}`)) || [];
    reviews = reviews.filter(r => r.email !== email);
    localStorage.setItem(`reviews_${city}`, JSON.stringify(reviews));
    renderAllReviews();
}
function toggleReviewForm() {
    const wrapper = document.getElementById("review-form-wrapper");
    wrapper.classList.toggle("hidden");
}

