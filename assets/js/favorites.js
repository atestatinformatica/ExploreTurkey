let isLoggedIn = false;
let favorites = [];
let currentUserEmail = "";
let userProfileImage = "assets/images/users/user-placeholder.jpg";

function login(email) {
    isLoggedIn = true;
    currentUserEmail = email;
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("loggedInEmail", email);
    favorites = JSON.parse(localStorage.getItem(`favorites_${email}`)) || [];
    updateNavbar();
    showMessage("You are now logged in!");
    const scrollBack = localStorage.getItem("preLoginScroll");
	// Colorează inimile după login, fără refresh
favorites.forEach(name => {
	const pendingReview = localStorage.getItem("pendingReview");
if (pendingReview) {
    setTimeout(() => {
        openReviewPopup();
        localStorage.removeItem("pendingReview");
    }, 600);
}


    const likeAnchors = Array.from(document.querySelectorAll('a[onclick*="toggleLike"]'))
        .filter(a => a.getAttribute('onclick').includes(`'${name}'`));

    likeAnchors.forEach(anchor => {
        const icon = anchor.querySelector('i');
        if (icon) {
            icon.classList.remove("fa-heart-o");
            icon.classList.add("fa-heart");
            icon.style.color = "red";
        }
    });
});

    if (scrollBack) {
        setTimeout(() => {
            window.scrollTo({ top: parseInt(scrollBack), behavior: 'smooth' });
            localStorage.removeItem("preLoginScroll");
        }, 300);
    }
}

function logout() {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("loggedInEmail");
    isLoggedIn = false;
    favorites = [];
    currentUserEmail = "";
    location.href = "index.html";
}
function saveUser(email, username, password) {
    let users = JSON.parse(localStorage.getItem("users")) || [];
    // verificăm dacă userul există deja
    const existingUser = users.find(u => u.email === email);
    if (!existingUser) {
        users.push({ email, username, password });
        localStorage.setItem("users", JSON.stringify(users));
    }
}


function toggleLike(name, iconElement) {
    if (!isLoggedIn) {
        redirectToCreateAccount();
        return;
    }
    const index = favorites.indexOf(name);
    if (index === -1) {
        favorites.push(name);
        iconElement.classList.remove("fa-heart-o");
        iconElement.classList.add("fa-heart");
        iconElement.style.color = "red";
        showMessage(`${name} added to favorites!`);
    } else {
        favorites.splice(index, 1);
        iconElement.classList.remove("fa-heart");
        iconElement.classList.add("fa-heart-o");
        iconElement.style.color = "";
        showMessage(`${name} removed from favorites.`);
    }
    localStorage.setItem(`favorites_${currentUserEmail}`, JSON.stringify(favorites));
    if (document.getElementById("favorites-panel")?.classList.contains("open")) {
        refreshFavoritesPanel();
    }
}

function toggleFavoritesPanel() {
    const panel = document.getElementById("favorites-panel");
    panel.classList.toggle("open");
    if (panel.classList.contains("open")) {
        refreshFavoritesPanel();
    }
}

function refreshFavoritesPanel() {
    const panel = document.getElementById("favorites-panel");
    const container = panel.querySelector(".favorites-list");
    container.innerHTML = "";

    const favoritesNames = favorites;

    if (favoritesNames.length === 0) {
        container.innerHTML = "<p>No favorites yet.</p>";
    } else {
        favoritesNames.forEach(name => {
            const item = locationsData.find(loc => loc.name === name);
            if (item) {
                container.innerHTML += `
                    <div class="single-explore-item">
                        <div class="single-explore-img">
                            <img src="${item.image}" alt="${item.name}">
                            <div class="single-explore-img-info">
                                <button>${item.tag}</button>
                                <div class="single-explore-image-icon-box"></div>
                            </div>
                        </div>
                        <div class="single-explore-txt ${item.themeClass}">
                            <h2><a href="#">${item.name}</a></h2>
                            <p class="explore-rating-price">
                                <span class="explore-rating">${item.rating}</span>
                                <a href="#">${item.ratingsCount}</a>
                                <span class="explore-price-box">price: <span class="explore-price">${item.price}</span></span>
                                <a href="#">${item.type}</a>
                            </p>
                            <div class="explore-person">
                                <div class="row">
                                    <div class="col-sm-2">
                                        <div class="explore-person-img">
                                            <a href="#"><img src="assets/images/users/user-placeholder.jpg" alt="User"></a>
                                        </div>
                                    </div>
                                    <div class="col-sm-10">
                                        <p>${item.description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
            }
        });

        container.innerHTML += `<button onclick="clearFavorites()" class="clear-favorites-btn">Clear All</button>`;
    }
}

function clearFavorites() {
    if (confirm("Are you sure you want to clear all favorites?")) {
        favorites = [];
        localStorage.setItem(`favorites_${currentUserEmail}`, JSON.stringify(favorites));
        refreshFavoritesPanel();
        const allHeartIcons = document.querySelectorAll('a[onclick*="toggleLike"] i');
        allHeartIcons.forEach(icon => {
            icon.classList.remove("fa-heart");
            icon.classList.add("fa-heart-o");
            icon.style.color = "";
        });
        showMessage("Favorites cleared.");
    }
}

function updateNavbar() {
    const nav = document.querySelector(".nav.navbar-nav.navbar-right");
    if (!nav.querySelector('.user-logged-in')) {
        nav.innerHTML += `
            <li class="scroll user-logged-in"><a href="#" onclick="event.preventDefault(); toggleFavoritesPanel()">My Favorites</a></li>
            <li class="scroll user-logged-in"><a href="#" onclick="logout()">Logout</a></li>
            <li class="user-logged-in">
    <a href="#" onclick="event.preventDefault(); toggleUserProfilePanel()">
        <img src="${userProfileImage}" alt="Profile" style="width:32px; height:32px; border-radius:50%;">
    </a>
</li>

        `;
    }
}



function showMessage(text) {
    const box = document.getElementById("message-box");
    if (!box) return;
    box.textContent = text;
    box.classList.remove("hidden");
    box.classList.add("show");
    setTimeout(() => {
        box.classList.remove("show");
        box.classList.add("hidden");
    }, 2500);
}

function redirectToCreateAccount() {
    localStorage.setItem("preLoginScroll", window.scrollY);
    showMessage("Please log in with your email to like places.");
    document.querySelector("#login")?.scrollIntoView({ behavior: 'smooth' });
}

function submitFullLogin(event) {
    event.preventDefault();
    const email = document.getElementById("login-email").value.trim();
    const username = document.getElementById("login-username").value.trim();
    const password = document.getElementById("login-password").value.trim();

    if (!email || !username || !password) {
        showMessage("Please fill in all fields.");
        return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];
    const existingUser = users.find(u => u.email === email);

    if (existingUser) {
        if (existingUser.password === password && existingUser.username === username) {
            login(email);
        } else {
            showMessage("Incorrect username or password.");
        }
    } else {
        // Dacă userul nu există, îl creăm automat (sau poți elimina partea asta dacă vrei strict doar login)
        saveUser(email, username, password);
        login(email);
        showMessage("Account created and logged in!");
    }
}




document.addEventListener("DOMContentLoaded", () => {
	
    if (localStorage.getItem("isLoggedIn") === "true") {
        isLoggedIn = true;
        currentUserEmail = localStorage.getItem("loggedInEmail") || "";
        favorites = JSON.parse(localStorage.getItem(`favorites_${currentUserEmail}`)) || [];
        updateNavbar();

        setTimeout(() => {
            favorites.forEach(name => {
                const likeAnchors = Array.from(document.querySelectorAll('a[onclick*="toggleLike"]'))
                    .filter(a => a.getAttribute('onclick').includes(`'${name}'`));

                likeAnchors.forEach(anchor => {
                    const icon = anchor.querySelector('i');
                    if (icon) {
                        icon.classList.remove("fa-heart-o");
                        icon.classList.add("fa-heart");
                        icon.style.color = "red";
                    }
                });
            });
        }, 300); // poți mări la 500 ms dacă încă nu merge
    }
	document.getElementById("login-form").addEventListener("submit", submitFullLogin);

});

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


function submitReviewPopup() {
    const popup = document.getElementById("review-popup");
    const city = document.getElementById("review-city").value.trim();
    const rating = popup.querySelectorAll(".star-rating .selected").length;
    const text = popup.querySelector("textarea").value.trim();

    if (!city || !text || rating === 0) {
        showMessage("Please select a city, add a comment and a rating.");
        return;
    }

    const key = `reviews_${city}`;
    let reviews = JSON.parse(localStorage.getItem(key)) || [];

    reviews = reviews.filter(r => r.email !== currentUserEmail);
    reviews.push({ email: currentUserEmail, text, rating });

    localStorage.setItem(key, JSON.stringify(reviews));
    popup.classList.add("hidden");
    renderAllReviews?.();  // dacă ai o funcție de refresh
    showMessage("Thank you for your review!");
}

function toggleUserProfilePanel() {
    const panel = document.getElementById("user-profile-panel");
    panel.classList.toggle("open");

    if (panel.classList.contains("open")) {
        // Umplem datele utilizatorului
        let users = JSON.parse(localStorage.getItem("users")) || [];
        const currentUser = users.find(u => u.email === currentUserEmail);

        if (currentUser) {
            document.getElementById("profile-username").textContent = currentUser.username;
            document.getElementById("profile-email").textContent = currentUser.email;
            document.getElementById("profile-password").textContent = currentUser.password;
        }
    }
}


