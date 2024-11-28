// Js Dark Mode
  // Pilih elemen input checkbox
  const toggleDarkMode = document.getElementById('toggle');

  // Tambahkan event listener ke input
  toggleDarkMode.addEventListener('change', () => {
    // Toggle kelas dark di elemen <html>
    document.documentElement.classList.toggle('dark');
  });

// Js Navbar

  const navLinks = document.querySelector('.nav-links');
  function onToggleMenu(e) {
    e.name = e.name === 'menu' ? 'close' : 'menu';
    navLinks.classList.toggle('top-[10%]'); // Menampilkan navbar di atas
    navLinks.classList.toggle('top-[-100%]'); // Menyembunyikan navbar
  }
