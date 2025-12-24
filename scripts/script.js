document.getElementById("contactForm")
.addEventListener("submit", e => {
  e.preventDefault();
  alert("Повідомлення надіслано!");
  e.target.reset();
});

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = e.currentTarget.getAttribute('href');
    if (target) {
      const element = document.querySelector(target);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
