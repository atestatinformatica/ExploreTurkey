let reviewsRendered = false;

function renderAllReviews() {
  if (reviewsRendered) return;
  reviewsRendered = true;

  const carousel = document.querySelector('.testimonial-carousel');
  if (!carousel) return;

  // ⛔️ curățăm DOAR review-urile generate de utilizator
  carousel.querySelectorAll('.user-review').forEach(el => el.remove());

  const cities = [
    'istanbul', 'ankara', 'izmir', 'antalya', 'bursa',
    'adana', 'gaziantep', 'konya', 'trabzon', 'kayseri',
    'mardin', 'sanliurfa', 'cappadocia', 'pamukkale',
  ];

  const users = JSON.parse(localStorage.getItem('users') || '[]');
  const currentUser = users.find(u => u.email === currentUserEmail) || {};

  cities.forEach(city => {
    const reviews = JSON.parse(localStorage.getItem(`reviews_${city}`)) || [];

    reviews.forEach(r => {
      // verificăm dacă review-ul există deja (după email + city)
      const duplicate = Array.from(carousel.children).some(el =>
        el.dataset.email === r.email && el.querySelector('h4')?.innerText.toLowerCase() === city
      );
      if (duplicate) return;

      const div = document.createElement('div');
      div.className = 'single-testimonial-box user-review';
      div.dataset.email = r.email;

      div.innerHTML = `
        <div class="testimonial-description">
          <div class="testimonial-info">
            <div class="testimonial-img">
              <img src="${r.photo || 'assets/images/users/user.png'}" alt="client">
            </div>
            <div class="testimonial-person">
              <h2>${r.username || r.email.split('@')[0]}</h2>
              <h4>${city.charAt(0).toUpperCase() + city.slice(1)}</h4>
              <div class="testimonial-person-star">
                ${'<i class="fa fa-star"></i>'.repeat(r.rating)}
                ${'<i class="fa fa-star-o"></i>'.repeat(5 - r.rating)}
              </div>
            </div>
          </div>
          <div class="testimonial-comment">
            <p>"${r.text}"</p>
          </div>
          ${r.email === currentUserEmail ? `
            <div class="testimonial-controls">
             <button onclick="deleteReview('${city}', '${r.email}')" class="review-button" style="background-color:#dc3545;">Delete</button>
            </div>` : ''}
        </div>
      `;
      carousel.appendChild(div);
    });
  });

  if ($(carousel).hasClass('slick-initialized')) {
    $(carousel).slick('unslick');
  }

  $(carousel).slick({
    centerMode: true,
    centerPadding: '60px',
    autoplay: true,
    autoplaySpeed: 3000,
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2, centerPadding: '40px' } },
      { breakpoint: 600, settings: { slidesToShow: 1, centerPadding: '20px' } }
    ],
  });
}

function deleteReview(city, email) {
  if (!confirm("Are you sure you want to delete this review?")) return;

  let reviews = JSON.parse(localStorage.getItem(`reviews_${city}`)) || [];
  reviews = reviews.filter(r => r.email !== email);
  localStorage.setItem(`reviews_${city}`, JSON.stringify(reviews));

  // resetăm complet randarea
  reviewsRendered = false;
  const carousel = document.querySelector('.testimonial-carousel');
  if (carousel && $(carousel).hasClass('slick-initialized')) {
    $(carousel).slick('unslick'); // închidem slick
  }
  renderAllReviews();
  showMessage("Your review has been deleted.");
}
