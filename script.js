const password = document.getElementById("password");
const showPassword = document.getElementById("showPassword");
const demoBtn = document.getElementById("demoBtn");

showPassword.addEventListener("click", () => {
  const hidden = password.type === "password";
  password.type = hidden ? "text" : "password";
  showPassword.textContent = hidden ? "Hide" : "Show";
});

demoBtn.addEventListener("click", () => {
  document.getElementById("username").value = "demo_user";
  password.value = "demo-password";
});
