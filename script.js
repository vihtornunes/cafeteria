const button = document.querySelector('.content-button');

button.addEventListener('mouseover', () => {
  button.classList.add('animated');
});

button.addEventListener('mouseout', () => {
  button.classList.remove('animated');
});





const textContainer = document.querySelector('.gallery-card');
const textItems = textContainer.querySelectorAll('p');

let currentItem = 0;




document.addEventListener("DOMContentLoaded", function() {
  const texts = document.querySelectorAll(".text");
  let currentIndex = 0;

  function showText(index) {
      texts.forEach((text, i) => {
          if (i === index) {
              text.classList.add("active");
          } else {
              text.classList.remove("active");
          }
      });
  }

  function changeText() {
      currentIndex = (currentIndex + 1) % texts.length;
      showText(currentIndex);
  }

  setInterval(changeText, 7000);
});



// Função para rolar suavemente até a âncora
function scrollToAnchor(anchor) {
  const target = document.querySelector(anchor);
  if (target) {
      const offsetTop = target.getBoundingClientRect().top;
      window.scrollBy({ top: offsetTop, left: 0, behavior: 'smooth' });
  }
}

// Adicionar um evento de clique aos links das âncoras
const anchorLinks = document.querySelectorAll('a[href^="#"]');
anchorLinks.forEach(link => {
  link.addEventListener('click', function (event) {
      event.preventDefault();
      const anchor = this.getAttribute('href');
      scrollToAnchor(anchor);
  });
});