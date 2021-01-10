const signBtn = document.querySelector(".signUp");
const loginBtn = document.querySelector(".login");

function run() {
  signBtn.addEventListener("click", signUp);
  loginBtn.addEventListener("click", login);
}

function login() {
  location.href = "/login";
}

function signUp() {
  location.href = "/signUp";
}
run();
