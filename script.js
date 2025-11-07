document.getElementById('contact-form').addEventListener('submit', function (e) {
  e.preventDefault();
  const name = this.name.value.trim();
  const email = this.email.value.trim();
  const message = this.message.value.trim();

  if (!name || !email || !message) {
    alert("Mohon lengkapi semua kolom sebelum mengirim.");
    return;
  }

  alert(`Terima kasih, ${name}! Pesan Anda sudah kami terima dan akan segera ditindaklanjuti.`);
  this.reset();
});
