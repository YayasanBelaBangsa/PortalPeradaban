document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const nameInput = this.name;
  const emailInput = this.email;
  const messageInput = this.message;

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const message = messageInput.value.trim();

  // Hilangkan kelas error sebelumnya
  [nameInput, emailInput, messageInput].forEach(input => input.classList.remove('error'));

  let valid = true;

  // Validasi nama
  if (!name) {
    nameInput.classList.add('error');
    valid = false;
  }

  // Validasi email dengan regex sederhana
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailPattern.test(email)) {
    emailInput.classList.add('error');
    valid = false;
  }

  // Validasi pesan
  if (!message) {
    messageInput.classList.add('error');
    valid = false;
  }

  if (!valid) {
    alert('Mohon lengkapi semua kolom yang wajib diisi dengan benar.');
    return;
  }

  alert(`Terima kasih, ${name}! Pesan Anda sudah kami terima dan akan segera ditindaklanjuti.`);
  this.reset();
});
