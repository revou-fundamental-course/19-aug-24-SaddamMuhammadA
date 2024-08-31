//Toggle & Resposive Navigation
const navSlide = () => {
  const burger = document.querySelector(".burger");
  const navList = document.querySelector("nav");

  burger.addEventListener("click", () => {
    navList.classList.toggle("nav-active");
    burger.classList.toggle("toggle-burger");
  });
};

// navSlide();

// document
//   .getElementById("contact-form")
//   .addEventListener("submit", function (event) {
//     event.preventDefault(); // Prevent the form from submitting the traditional way

//     // Get form values
//     const name = document.getElementById("name").value;
//     const dob = document.getElementById("dob").value;
//     const gender = document.querySelector('input[name="gender"]:checked').value;
//     const message = document.getElementById("message").value;

//     // Get current date and time
//     const currentTime = new Date().toString();

//     // Display the result
//     const resultSection = document.getElementById("result");
//     resultSection.innerHTML = `
//         <h4>Current time: ${currentTime}</h4>
//         <p><strong>Nama:</strong> ${name}</p>
//         <p><strong>Tanggal Lahir:</strong> ${dob}</p>
//         <p><strong>Jenis Kelamin:</strong> ${gender}</p>
//         <p><strong>Pesan:</strong> ${message}</p>
//     `;
//   });

// validation form on submit
document.getElementById("contactForm").addEventListener("submit"),
  (e) => {
    event.preventDefault(); // Mencegah halaman reload

    // Ambil nilai input
    const name = document.getElementById("name").value;
    const birthdate = document.getElementById("dob").value;
    const gender = document.getElementById("gender").value;
    const message = document.getElementById("message").value;

    // Validasi input
    let err = [];
    if (name === "") {
      err.push("Name is required");
    }
    if (dob === "") {
      err.push("Birthdate is required");
    }
    if (gender === "") {
      err.push("Gender is required");
    }
    if (message === "") {
      err.push("Message is required");
    }
  };

// jika tidak ada error maka hasil form akan di tampilkan pada canvas
if (err.length === 0) {
  const dateNow = new Date();
  const canvas = document.getElementById("result");
  const ctx = canvas.getContext("2d");
  ctx.font = "20px Arial";
  ctx.fillText(`Date: ${dateNow.toDateString()}`, 10, 30); // Date dipindahkan ke paling atas
  ctx.fillText(`Name: ${name}`, 10, 70);
  ctx.fillText(`Dob: ${dob}`, 10, 110);
  ctx.fillText(`Gender: ${gender}`, 10, 150);
  ctx.fillText(`Message:`, 10, 190);
  const messageLines = wrapText(ctx, message || "-", 20, 230, 360, 20);
  messageLines.forEach((line, index) => {
    ctx.fillText(line, 20, 230 + index * 20);
  });
}
