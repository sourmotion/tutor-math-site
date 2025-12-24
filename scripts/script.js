document.getElementById("contactForm")
.addEventListener("submit", e => {
  event.preventDefault();
  const name = form.elements['name'].value.trim();
  const email = form.elements['email'].value.trim();
  const message = form.elements['message'].value.trim();
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,6}$/i;
  if (!emailPattern.test(email)) {
    alert('Будь ласка, введіть коректний Email.');
    return;
  }
  if (name === "" || message === "") {
    alert('Будь ласка, заповніть усі поля форми.');
    return;
  }
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
