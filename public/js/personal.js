
            // Js Dark Mode
            const toggleDarkMode = document.getElementById('toggle');
            toggleDarkMode.addEventListener('change', () => {
              document.documentElement.classList.toggle('dark');
            });

            // Js Navbar
            const navLinks = document.querySelector('.nav-links');
            function onToggleMenu(e) {
              e.name = e.name === 'menu' ? 'close' : 'menu';
              navLinks.classList.toggle('top-[10%]');
              navLinks.classList.toggle('top-[-100%]');
            }
            // Toggle FAQ content visibility
            document.querySelectorAll('button').forEach(button => {
              button.addEventListener('click', () => {
                const content = document.getElementById(button.id + '-content');
                const icon = document.getElementById(button.id + '-icon');

                if (content.classList.contains('max-h-0')) {
                  content.classList.remove('max-h-0');
                  content.classList.add('max-h-96');
                } else {
                  content.classList.add('max-h-0');
                  content.classList.remove('max-h-96');
                }

                icon.classList.toggle('transform');
                icon.classList.toggle('rotate-180');
              });
            });
            //  Line Clamp
            document.addEventListener('DOMContentLoaded', () => {
              function lineClamp(id) {
                const line = document.getElementById(id);
                line.classList.toggle('line-clamp-3');
                line.classList.toggle('line-full');
              }
              // Project Satu
              const lineSatu = document.getElementById('lineSatu');
              lineSatu.addEventListener('click', () => lineClamp('lineSatu'));
            
              // Project Dua
              const lineDua = document.getElementById('lineDua');
              lineDua.addEventListener('click', () => lineClamp('lineDua'));
            });
            // Aos Animation
            window.addEventListener("load", function () {
              setTimeout(() => {
                  document.getElementById("loading-screen").style.display = "none";
                  AOS.init({
                      once: true 
                  });
              }, 2000); 
          });

          // Button Top
          const backToTopButton = document.getElementById("backToTop");

          window.addEventListener("scroll", function () {
            if (window.scrollY > 200) {
              backToTopButton.classList.remove("opacity-0", "pointer-events-none");
              backToTopButton.classList.add("opacity-100");
            } else {
              backToTopButton.classList.add("opacity-0", "pointer-events-none");
              backToTopButton.classList.remove("opacity-100");
            }
          });

          
      
  
