const allInputs = document.querySelectorAll("input");
const btnSubmit = document.querySelector(".btnSubmit");
const error = document.querySelectorAll(".error");
const radioButton = document.querySelectorAll(".radioButton");
const radioDiv = document.querySelectorAll(".radioDiv");
const inputMessage = document.getElementById("inputMessage");

clearInputs();

// submit button event listener
btnSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  clearErrors(); // clear all errors
  checkName(); // validate name
  validateEmail(); // validate email
  checkQuery(); // validate query selection
  checkMessage(); //validate message
  checkConsent(); //validate consent
  showMessage();
});

//radio button background styles
radioDiv.forEach((e) => {
  e.addEventListener("click", (event) => {
    for (let i = 0; i < radioDiv.length; i++) {
      radioDiv[i].classList.remove("active");
    }
    e.classList.add("active");
    for (let i = 0; i < radioButton.length; i++) {
      if (radioDiv[i].classList.contains("active")) {
        radioButton[i].checked = true;
      } else {
        radioButton[i].checked = false;
      }
    }
  });
});

//Check Name for Errors
function checkName() {
  let name = document.querySelectorAll(".name");
  for (let i = 0; i < name.length; i++) {
    if (name[i].value === "") {
      error[i].style.display = "block";
      name[i].style.border = "1px solid var(--red)";
    } else {
      name[i].style.border = "1px solid var(--gray-100)";
    }
  }
}
//Clear all errors
function clearErrors() {
  error.forEach((e) => {
    e.style.display = "none";
  });
}

//Clear all inputs
function clearInputs() {
  for (let i = 0; i < allInputs.length; i++) {
    allInputs.forEach((e) => {
      e.value = "";
    });
  }

  clearRadioButton();
  inputMessage.value = "";
}

//Validate Email
function validateEmail() {
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  let emailInput = document.getElementById("email");
  let email = emailInput.value;
  let emailErrorMessage = document.querySelector(".emailError");

  if (emailRegex.test(email)) {
    emailErrorMessage.style.display = "none";
    emailInput.style.border = "1px solid var(--gray-100)";
  } else {
    emailErrorMessage.style.display = "block";
    emailInput.style.border = "1px solid var(--red)";
  }
}

function checkQuery() {
  let errorQuery = document.querySelector(".errorQuery");
  if (radioButton[0].checked === false && radioButton[1].checked === false) {
    errorQuery.style.display = "block";
  } else {
    errorQuery.style.display = "none";
  }
}

function checkMessage() {
  let messageError = document.querySelector(".messageError");
  // let messageField = document.getElementById(".inputMessage");

  if (inputMessage.value === "") {
    messageError.style.display = "block";
    inputMessage.style.border = "1px solid var(--red)";
  } else {
    messageError.style.display = "none";
    inputMessage.style.border = "1px solid var(--gray-100)";
  }
}

function checkConsent() {
  let consent = document.getElementById("consent");
  let consentError = document.querySelector(".consentError");

  if (consent.checked === false) {
    consentError.style.display = "block";
  } else {
    consentError.style.display = "none";
  }
}

function showMessage() {
  let counter = 0;
  let success = document.querySelector(".success");
  let container = document.querySelector(".container");
  let form = document.querySelector("form");
  let consent = document.getElementById("consent");

  for (let i = 0; i < error.length; i++) {
    if (error[i].style.display === "block") {
      counter++;
    }
  }

  if (counter === 0) {
    success.style.display = "block";
    container.style.margin = "0 1rem 1rem 1rem";
    form.style.margin = "0";
    consent.checked = false;
    clearInputs();
    clearRadioButton();
    for (let i = 0; i < radioDiv.length; i++) {
      radioDiv[i].style.backgroundColor = "var(--white)";
    }
  }
}

function clearRadioButton() {
  for (let i = 0; i < radioButton.length; i++) {
    radioButton[i].checked = false;
  }
}
