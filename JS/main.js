const loginBtn = document.querySelector(".loginBtn");
const emailInput = document.querySelector("input[type='email']");
const passwordInput = document.querySelector("input[type='password']");
const rememberMeCheckbox = document.querySelector("input[type='checkbox']");
const clearBtn = document.querySelector(".clearBtn");
window.addEventListener("load", () => {
	if (localStorage.getItem("email") && localStorage.getItem("password")) {
		emailInput.value = localStorage.getItem("email");
		passwordInput.value = localStorage.getItem("password");
		rememberMeCheckbox.checked = true;
		alert("Welcome Back " + localStorage.getItem("email") + "!");
	}
	loginBtn.addEventListener("click", (e) => {
		e.preventDefault();
		const email = emailInput.value;
		const password = passwordInput.value;
		const rememberMe = rememberMeCheckbox.checked;
		if (rememberMe) {
			localStorage.setItem("email", email);
			localStorage.setItem("password", password);
		}
	});
	clearBtn.addEventListener("click", (e) => {
		e.preventDefault();
		localStorage.removeItem("email");
		localStorage.removeItem("password");
		emailInput.value = "";
		passwordInput.value = "";
		rememberMeCheckbox.checked = false;
	});
});
