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
  if (passwordCheck(password)) {
    alert("비밀번호는 대소문자와 숫자를 포함한 8~16자리 비밀번호로 해주세요");
    return (password.value = "");
  }
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
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.success) {
        alert("환영합니다!");
        return (location.href = "/");
      }
      alert(res.msg);
    });
}

function passwordCheck(password) {
  const check = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,16}$/;
  if (!check.test(password.value)) {
    return true;
  } else {
    return false;
  }
}

run();
