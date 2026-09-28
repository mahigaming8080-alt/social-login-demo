const password = document.getElementById("password");
const show = document.getElementById("show");
const form = document.getElementById("loginForm");
const status = document.getElementById("status");

show.addEventListener("click", () => {
  const hidden = password.type === "password";
  password.type = hidden ? "text" : "password";
  show.textContent = hidden ? "Hide" : "Show";
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  // Demo only.
  // No password is stored, emailed, or uploaded.
  status.textContent = "Demo login completed.";
});
