document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const nameInput = this.name;
  const emailInput = this.email;
  const messageInput = this.message;

  // Trim values
  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const message = messageInput.value.trim();

  // Reset previous error styles
  [nameInput, emailInput, messageInput].forEach(input => input.classList.remove('error'));

  let valid = true;

  // Simple email regex for validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Validation
  if (!name) {
    nameInput.classList.add('error');
    valid = false;
  }

  if (!email || !emailPattern.test(email)) {
    emailInput.classList.add('error');
    valid = false;
  }

  if (!message) {
    messageInput.classList.add('error');
    valid = false;
  }

  if (!valid) {
    alert('Mohon lengkapi semua kolom yang wajib diisi dengan benar.');
    return;
  }

  // After validation success
  alert(`Terima kasih, ${name}! Pesan Anda sudah kami terima dan akan segera ditindaklanjuti.`);
  this.reset();
});
