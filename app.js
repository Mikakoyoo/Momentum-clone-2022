const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");

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
