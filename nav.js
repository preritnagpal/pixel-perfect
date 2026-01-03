
// navbar active link handling

function scrollToSection(id, element) {
  const section = document.getElementById(id);
  if(section){
    section.scrollIntoView({ behavior: 'smooth' });
  }

  const navItems = document.querySelectorAll('.nav-item');
  navItems.forEach(item => item.classList.remove('active'));
  element.classList.add('active');
}


// Form validation 

const formInfo = document.querySelector(".form-info");
const submitBtn = document.getElementById("submitBtn");

submitBtn.addEventListener("click", function (e) {
  e.preventDefault();

  const fullName = document.getElementById("fullName");
  const email = document.getElementById("email");
  const message = document.getElementById("message");

  let isValid = true;

  // Reset errors
  [fullName, email, message].forEach((field) => {
    field.classList.remove("input-error");
  });

  // Full Name validation
  if (!fullName.value.trim()) {
    fullName.classList.add("input-error");
    isValid = false;
  }

  // Email validation
  if (!email.value.trim()) {
    email.classList.add("input-error");
    isValid = false;
  } else {
    // Regex to check valid email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.value.trim())) {
      email.classList.add("input-error");
      alert("Please enter a valid email address!");
      isValid = false;
    }
  }

  // Message validation
  if (!message.value.trim()) {
    message.classList.add("input-error");
    isValid = false;
  }

  if (isValid) {
    alert("Form submitted successfully!");
    formInfo.querySelectorAll("input, textarea").forEach((field) => {
      field.value = "";
    });
  }
});

