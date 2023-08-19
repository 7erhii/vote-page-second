document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".vote__part");
    slides[0].classList.add("vote-showed");
  
    const buttons = document.querySelectorAll(".js-next-slide");
  
    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        (document.querySelector(".progress") as HTMLElement).style.display = "none";
        const activeSlideIndex = Array.from(slides).findIndex((slide) =>
          slide.classList.contains("vote-showed")
        );
  
        if (activeSlideIndex >= 0) {
          slides[activeSlideIndex].classList.remove("vote-showed");
          const nextSlideIndex = (activeSlideIndex + 1) % slides.length;
          slides[nextSlideIndex].classList.add("vote-showed");
        }
      });
    });
  });
  