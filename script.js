const form = document.getElementById("loginForm");
const password = document.getElementById("password");
const showPassword = document.getElementById("showPassword");
const demoBtn = document.getElementById("demoBtn");
const success = document.getElementById("success");

showPassword.addEventListener("click", () => {
  const hidden = password.type === "password";

  password.type = hidden ? "text" : "password";
  showPassword.textContent = hidden ? "Hide" : "Show";
});

form.addEventListener("submit", (event) => {

  // Demo only:
  // username/password are NOT sent anywhere.
  success.style.display = "block";

  setTimeout(() => {
    success.style.display = "none";
  }, 2500);
});

demoBtn.addEventListener("click", () => {
  document.getElementById("username").value = "demo_user";
  password.value = "demo-password";
});
