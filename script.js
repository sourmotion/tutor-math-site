document.getElementById("contactForm")
.addEventListener("submit", e => {
  e.preventDefault();
  alert("Повідомлення надіслано!");
  e.target.reset();
});
