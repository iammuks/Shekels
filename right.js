function handleScrollAnimation() {
    const elements = document.querySelectorAll('.scroll-animation-right');
  
    elements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
  
      if (elementTop < windowHeight * 0.75) {
        element.classList.add('active');
      }
    });
  }


  // Listen for the scroll event and invoke the animation function
window.addEventListener('scroll', handleScrollAnimation);

// Initially trigger the animation for elements in view on page load
window.addEventListener('DOMContentLoaded', handleScrollAnimation);