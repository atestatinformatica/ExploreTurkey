function handleLeaveReview() {
    if (!isLoggedIn) {
        localStorage.setItem("preLoginScroll", window.scrollY);
        localStorage.setItem("pendingReview", "true");
        showMessage("Please log in with your email to leave a review.");
        document.querySelector("#login")?.scrollIntoView({ behavior: "smooth" });
        return;
    }
    openReviewPopup();
}


function openReviewPopup() {
    const popup = document.getElementById("review-popup");
    popup.classList.remove("hidden");

    // Clear previous stars
    const stars = document.getElementById("star-rating");
    stars.innerHTML = "";
    for (let i = 1; i <= 5; i++) {
        const star = document.createElement("span");
        star.textContent = "★";
        star.dataset.value = i;
        star.onclick = () => {
            Array.from(stars.children).forEach(s => s.classList.remove("selected"));
            for (let j = 0; j < i; j++) {
                stars.children[j].classList.add("selected");
            }
        };
        stars.appendChild(star);
    }

    // Reset dropdown & textarea
    document.getElementById("review-city").value = "";
    popup.querySelector("textarea").value = "";
}
function closeReviewPopup() {
    document.getElementById("review-popup").classList.add("hidden");
}


function submitReviewPopup() {
  const city = document.getElementById("review-city").value.trim();
  const rating = document.querySelectorAll(".star-rating .selected").length;
  const text = document.querySelector("#review-popup textarea").value.trim();

  if (!city || !text || rating === 0) {
    showMessage("Please select a city, add a comment and a rating.");
    return;
  }

  let users = JSON.parse(localStorage.getItem("users")) || [];
  const user = users.find(u => u.email === currentUserEmail);
  const username = user?.username || currentUserEmail.split("@")[0];
  const photo = localStorage.getItem(`profileImage_${currentUserEmail}`) || "assets/images/users/user.png";

  let reviews = JSON.parse(localStorage.getItem(`reviews_${city}`)) || [];

  reviews.push({ email: currentUserEmail, username, text, rating, photo });
  localStorage.setItem(`reviews_${city}`, JSON.stringify(reviews));

  document.getElementById("review-popup").classList.add("hidden");
  showMessage("Thank you for your review!");

  reviewsRendered = false; // resetăm flagul

  // așteptăm 50ms înainte de re-render ca să evităm dublele
  setTimeout(() => {
    renderAllReviews();
  }, 50);
}

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

