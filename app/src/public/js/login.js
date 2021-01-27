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
      .then((res) => processResponse(res))
      .catch((err) => {
        console.err(new Error("로그인 중 에러 발생"));
      });
  };

  requestLogin(post);

  const processResponse = (res) => {
    if (res.success) {
      let name = res.name;
      alert(`${name}님 환영합니다🎉`);
      return (location.href = "/success");
    }
    alert("login 실패");
  };
};

run();
