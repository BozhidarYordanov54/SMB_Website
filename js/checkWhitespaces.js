window.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".contact-form");
  
    form.addEventListener("submit", (event) => {
      const inputs = form.querySelectorAll("input[type='text'], textarea");
      let isInvalid = false;
  
      inputs.forEach((input) => {
        if (input.value.trim() === "") {
          isInvalid = true;
          input.classList.add("invalid");
        } else {
          input.classList.remove("invalid");
        }
      });
  
      if (isInvalid) {
        event.preventDefault();
        
      }
    });
  });