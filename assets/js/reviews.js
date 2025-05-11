// reviews.js

// Inițializare Slick Carousel
function initializeCarousel() {
  $('.testimonial-carousel').slick({
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });
}

// Funcție pentru a adăuga recenzii dinamice
function renderAllReviews() {
  const container = document.querySelector('.testimonial-carousel');
  if (!container) return;

  // Păstrează recenziile hardcodate existente
  const hardcoded = Array.from(container.querySelectorAll('.single-testimonial-box'));
  container.innerHTML = '';
  hardcoded.forEach((box) => container.appendChild(box));

  const cities = [
    'istanbul', 'ankara', 'izmir', 'antalya', 'bursa',
    'adana', 'gaziantep', 'konya', 'trabzon', 'kayseri',
    'mardin', 'sanliurfa', 'cappadocia', 'pamukkale',
  ];

  const currentUser = JSON.parse(localStorage.getItem('currentUser')) || {};

  cities.forEach((city) => {
    const reviews = JSON.parse(localStorage.getItem(`reviews_${city}`)) || [];

    reviews.forEach((r) => {
      const div = document.createElement('div');
      div.className = 'single-testimonial-box';
      div.innerHTML = `
        <div class="testimonial-description">
          <div class="testimonial-info">
            <div class="testimonial-img">
              <img src="${r.photo || 'assets/images/clients/c7.png'}" alt="clients">
            </div>
            <div class="testimonial-person">
              <h2>${r.name || r.email.split('@')[0]}</h2>
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
          ${
            r.email === currentUser.email
              ? `
            <div class="testimonial-controls">
              <button onclick="editReview('${city}', '${r.email}')" class="review-button">Edit</button>
              <button onclick="deleteReview('${city}', '${r.email}')" class="review-button" style="background-color:#dc3545;">Delete</button>
            </div>`
              : ''
          }
        </div>
      `;
      container.appendChild(div);
    });
  });

  // Reîmprospătează caruselul
  if ($('.testimonial-carousel').hasClass('slick-initialized')) {
    $('.testimonial-carousel').slick('unslick');
  }
  initializeCarousel();
}

// Apelare funcții la încărcarea paginii
$(document).ready(function () {
  initializeCarousel();
  renderAllReviews();
});
