//Toggle & Resposive Navigation
const navSlide = () => {
  const burger = document.querySelector(".burger");
  const navList = document.querySelector("nav");

  burger.addEventListener("click", () => {
    navList.classList.toggle("nav-active");
    burger.classList.toggle("toggle-burger");
  });
};

navSlide();

document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    // Get form values
    const name = document.getElementById("name").value;
    const dob = document.getElementById("dob").value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const message = document.getElementById("message").value;

    // Get current date and time
    const currentTime = new Date().toString();

    // Display the result
    const resultSection = document.getElementById("result");
    resultSection.innerHTML = `
        <h4>Current time: ${currentTime}</h4>
        <p><strong>Nama:</strong> ${name}</p>
        <p><strong>Tanggal Lahir:</strong> ${dob}</p>
        <p><strong>Jenis Kelamin:</strong> ${gender}</p>
        <p><strong>Pesan:</strong> ${message}</p>
    `;
  });
