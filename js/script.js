'use strict';
document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
      const answer = button.nextElementSibling;
      const isOpen = answer.style.display === 'block';
  
      document.querySelectorAll('.faq-answer').forEach(item => {
        item.style.display = 'none'; 
      });
  
      if (!isOpen) {
        answer.style.display = 'block'; 
      }
    });
  });
  
  function expandCard(card) {
    const fullContent = card.querySelector('.full-content');
    const readMore = card.querySelector('.read-more');
  
    // Перевіряємо стан картки: розгорнута чи ні
    if (fullContent.style.display === 'block') {
      fullContent.style.display = 'none'; 
      card.style.height = '300px'; 
      readMore.style.display = 'inline-block'; 
    } else {
      fullContent.style.display = 'block'; 
      card.style.height = 'auto'; 
      readMore.style.display = 'none'; 
    }
  }

  // Для першої форми
  document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");
    const modal1 = document.getElementById("modal1");
    const closeModal1 = document.getElementById("closeModal1");
  
    // Подія відправки форми
    form.addEventListener("submit", (e) => {
      e.preventDefault();
  
      // Показуємо модальне вікно
      modal1.style.display = "block";
    });
  
    // Закриття модального вікна
    closeModal1.addEventListener("click", () => {
      modal1.style.display = "none";
      form.reset(); 
    });
  
    // Закриття модального вікна при кліку поза ним
    window.addEventListener("click", (e) => {
      if (e.target === modal1) {
        modal1.style.display = "none";
        form.reset();
      }
    });
  });

// Для другої форми
document.addEventListener("DOMContentLoaded", () => {
  const form2 = document.getElementById("form2");
  const modal2 = document.getElementById("modal2");
  const closeModal2 = document.getElementById("closeModal2");

  // Подія відправки форми
  form2.addEventListener("submit", (e) => {
    e.preventDefault(); 

    // Показуємо модальне вікно
    modal2.style.display = "flex";
  });

  // Закриття модального вікна
  closeModal2.addEventListener("click", () => {
    modal2.style.display = "none";
    form2.reset(); 
  });

  // Закриття модального вікна при кліку поза ним
  window.addEventListener("click", (e) => {
    if (e.target === modal2) {
      modal2.style.display = "none";
      form2.reset();
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const closeMenu = document.getElementById('closeMenu');

  closeMenu.addEventListener('click', () => {
    const mobileMenu = document.getElementById('mobileMenu');
    mobileMenu.style.display = 'none';
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("nav-menu");

  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("open");
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');

  // При натисканні на гамбургер відкривати/закривати меню
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('active');
  });

  // Закривати меню при кліку на посилання
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      mobileMenu.classList.remove('active');
    });
  });
});
