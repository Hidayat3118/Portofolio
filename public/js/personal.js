// Js Dark Mode
  const toggleDarkMode = document.getElementById('toggle');
  toggleDarkMode.addEventListener('change', () => {
    document.documentElement.classList.toggle('dark');
  });

// Js Navbar
  const navLinks = document.querySelector('.nav-links');
  function onToggleMenu(e) {
    e.name = e.name === 'menu' ? 'close' : 'menu';
    navLinks.classList.toggle('top-[10%]'); // Menampilkan navbar di atas
    navLinks.classList.toggle('top-[-100%]'); // Menyembunyikan navbar
  }

   // Toggle FAQ content visibility
   document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', () => {
      const content = document.getElementById(button.id + '-content');
      const icon = document.getElementById(button.id + '-icon');
      
      if (content.classList.contains('max-h-0')) {
        content.classList.remove('max-h-0');
        content.classList.add('max-h-96'); // Set max-height to show content
      } else {
        content.classList.add('max-h-0');
        content.classList.remove('max-h-96'); // Set max-height to collapse content
      }

      icon.classList.toggle('transform');
      icon.classList.toggle('rotate-180');
    });
  });


  // AOS Animation
  AOS.init();