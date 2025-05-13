function renderAllReviews() {
  const carousel = document.querySelector('.testimonial-carousel');
  if (!carousel) return;

  // Eliminăm toate recenziile existente
  carousel.innerHTML = '';

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
      div.className = 'single-testimonial-box user-review';
      div.dataset.email = r.email;

      div.innerHTML = `
        <div class="testimonial-description">
          <div class="testimonial-info">
            <div class="testimonial-img">
              <img src="${(r.email === currentUser.email && localStorage.getItem(`profileImage_${r.email}`)) || r.photo || 'assets/images/clients/c7.png'}" alt="clients">
            </div>
            <div class="testimonial-person">
              <h2>${r.username || r.name || r.email.split('@')[0]}</h2>
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
      carousel.appendChild(div);
    });
  });

  // Reinitializează slider-ul dacă este necesar
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
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerPadding: '40px',
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          centerPadding: '20px',
        },
      },
    ],
  });
}

