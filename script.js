let modes = document.querySelector("#modes");
let toggleBtn = document.querySelector("#toggleBtn");

toggleBtn.addEventListener("click", () => {
    modes.classList.toggle("dark");
})