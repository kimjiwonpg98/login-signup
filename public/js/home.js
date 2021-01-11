const signBtn = document.querySelector(".signUp");
const loginBtn = document.querySelector(".login");

function run() {
  signBtn.addEventListener("click", signup);
  loginBtn.addEventListener("click", login);
}

function login() {
  location.href = "/login";
}

function signup() {
  location.href = "/signup";
}
run();
