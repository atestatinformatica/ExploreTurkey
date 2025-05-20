function renderAllReviews() {
  const container = document.getElementById("all-reviews-container");
  if (!container) return;

  container.querySelectorAll(".user-review").forEach(el => el.remove());

  const cities = [
    "istanbul", "ankara", "izmir", "antalya", "bursa", "adana", "gaziantep", 
    "konya", "trabzon", "kayseri", "mardin", "sanliurfa", "cappadocia", "pamukkale"
  ];

  const userReviews = [];
  const otherReviews = [];

  cities.forEach(city => {
    const reviews = JSON.parse(localStorage.getItem(`reviews_${city}`)) || [];
    reviews.forEach(r => {
      const stars = "★".repeat(r.rating);
      const canDelete = (r.email === currentUserEmail);

      const reviewHTML = `
        <div class="review-card user-review" data-email="${r.email}">
          <div class="review-header">
            <img src="${r.photo}" alt="${r.username}">
            <div class="review-info">
              <h3>${r.username}</h3>
              <p class="review-location">${city.charAt(0).toUpperCase() + city.slice(1)}</p>
            </div>
            <div class="review-rating">${stars}</div>
          </div>
          <p class="review-text">"${r.text}"</p>
          ${canDelete ? `<button onclick="deleteReview('${city}')" class="review-delete-btn">Delete</button>` : ""}
        </div>
      `;

      if (r.email === currentUserEmail) {
        userReviews.unshift(reviewHTML); // Îl punem primul
      } else {
        otherReviews.push(reviewHTML);
      }
    });
  });

  // Întâi recenziile proprii (inversează ordinea dacă ai adăugat cu .unshift)
  userReviews.forEach(html => container.insertAdjacentHTML("afterbegin", html));

  // Apoi restul
  otherReviews.forEach(html => container.insertAdjacentHTML("beforeend", html));

  // Aplică ascunderea
applyReviewHidingLogic();

}


function deleteReview(city) {
  const confirmDelete = confirm("Are you sure you want to delete your review?");
  if (!confirmDelete) return;

  let reviews = JSON.parse(localStorage.getItem(`reviews_${city}`)) || [];

  // Eliminăm doar recenzia userului pentru acel oraș
  reviews = reviews.filter(r => r.email !== currentUserEmail);
  localStorage.setItem(`reviews_${city}`, JSON.stringify(reviews));

  // Ștergem doar recenzia din acel oraș pentru utilizator
  const container = document.getElementById("all-reviews-container");
  const userReviewForCity = Array.from(container.querySelectorAll(`.user-review[data-email="${currentUserEmail}"]`))
    .find(div => div.querySelector(".review-location")?.textContent?.toLowerCase() === city.toLowerCase());
  if (userReviewForCity) userReviewForCity.remove();

  showMessage("Review deleted.");
  applyReviewHidingLogic();

}

