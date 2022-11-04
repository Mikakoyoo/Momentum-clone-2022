const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");

<<<<<<< HEAD
const link = document.querySelector("a");

function onLoginSubmit(event) {
  event.preventDefault();
  console.log(loginInput.value);
}

function handleLinkClick(event) {
  event.preventDefault();
  console.dir(event);
}

loginForm.addEventListener("submit", onLoginSubmit);
link.addEventListener("click", handleLinkClick);
=======
// 위에 코드와 아래 코드는 같은 것
// const loginInput = document.querySelector("#login-form input");
// const loginButton = document.querySelector("#login-form button");

// function onLoginBtnClick() {
//   const username = loginInput.value;
//   if (username === "") {
//     alert("please write your name");
//   } else if (username.length > 15) {
//     alert("your name is too long.");
//   }
// }
// loginButton.addEventListener("click", onLoginBtnClick);

function onLoginBtnClick() {
  const username = loginInput.value;
  console.log(username);
}

loginButton.addEventListener("click", onLoginBtnClick);
>>>>>>> parent of d67bb1d (#4.1 Form Submission)
