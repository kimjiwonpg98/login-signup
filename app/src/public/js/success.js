const member = document.querySelector(".member"),
  first = document.querySelector(".first");

function run() {
  first.addEventListener("click", () => {
    location.href = "/";
  });
}


run();
