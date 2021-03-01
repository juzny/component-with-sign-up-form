const form = document.querySelector(".contact__form");
const inputs = document.querySelectorAll("input");

// const firstNameForm = document.getElementById("name");
// const lastNameForm = document.getElementById("lastname");
// const emailForm = document.getElementById("mail");
// const passwordForm = document.getElementById("password");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  inputs.forEach((input) => {
    if (!input.value) {
      input.parentElement.classList.add("error");
    } else input.parentElement.classList.remove("error");
  });
});
