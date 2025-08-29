// Change text on button click
document.getElementById("changeBtn").addEventListener("click", function () {
  document.getElementById("greeting").textContent = "You clicked the button!";
});

// Hover effect
const box = document.getElementById("box");
box.addEventListener("mouseover", () => box.style.backgroundColor = "#6ab7b9");
box.addEventListener("mouseout", () => box.style.backgroundColor = "#dbe2ef");

// Live input text
document.getElementById("nameInput").addEventListener("input", function (event) {
  document.getElementById("displayName").textContent = "Hello, " + event.target.value;
});

// Form submit
document.getElementById("myForm").addEventListener("submit", function (e) {
  e.preventDefault();
  let name = document.getElementById("formName").value;
  alert("Hello, " + name);
});

// Image manipulation
document.getElementById("imgBtn").addEventListener("click", function () {
  let img = document.getElementById("logo");
  img.src = "img 2.jpg";
  img.alt = "New Company Logo";
  img.classList.add("shadow-lg");
});

// Add & Remove paragraphs
document.getElementById("addPara").addEventListener("click", function () {
  let newPara = document.createElement("p");
  newPara.textContent = "This paragraph was added dynamically!";
  newPara.classList.add("text-success", "fw-bold");
  document.getElementById("paraContainer").appendChild(newPara);
});

document.getElementById("removePara").addEventListener("click", function () {
  let container = document.getElementById("paraContainer");
  if (container.lastChild) {
    container.removeChild(container.lastChild);
  }
});
