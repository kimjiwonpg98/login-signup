const id = document.querySelector(".inputID"),
  password = document.querySelector(".inputPW"),
  userName = document.querySelector(".userName"),
  completeBtn = document.querySelector(".complete");

function run() {
  completeBtn.addEventListener("click", requestSignup);
}

function requestSignup() {
	const data = {
		id : id.value, 
		password : password.value, 
		userName : userName.value
	}
	
	fetch("/signup", {
		method : 'POST',
		headers : {
			'Content-Type' : 'application/json'
		},
		body : JSON.stringify(data)
	})
}

run();
