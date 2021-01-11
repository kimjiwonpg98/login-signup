const id = document.querySelector(".inputID"),
  password = document.querySelector(".inputPW"),
  userName = document.querySelector(".userName"),
  completeBtn = document.querySelector(".complete"),
  backBtn = document.querySelector(".back");

function run() {
  completeBtn.addEventListener("click", requestSignup);
  backBtn.addEventListener("click", () => {
    location.href = "/";
  });
}

function requestSignup() {
  const data = {
    id: id.value,
    password: password.value,
    userName: userName.value,
  };

  fetch("/signup", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  });

  location.href = "/";
}

run();
