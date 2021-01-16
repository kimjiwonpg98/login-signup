const id = document.querySelector(".ID"),
  password = document.querySelector(".PW"),
  loginBtn = document.querySelector(".loginBtn"),
  backBtn = document.querySelector(".backBtn");

function run() {
  loginBtn.addEventListener("click", login);
  backBtn.addEventListener("click", () => {
    location.href = "/";
  });
}

const login = () => {
  const data = {
    id: id.value,
    pw: password.value,
  };

  const post = {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  };

  const requestLogin = (post) => {
    fetch("/login", post)
      .then((res) => res.json())
      .then((res) => {
        processResponse(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  requestLogin(post);

  const processResponse = (res) => {
    if (res.isSuccess) {
      let name = res.name;
      alert(`${name}님 환영합니다🎉`);
      return;
    }
    alert("login 실패");
  };
};

run();
