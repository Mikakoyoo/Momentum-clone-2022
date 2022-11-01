const title = document.querySelector("div.hello:first-child h1");

// function handTitleClick() {
//   console.log("title was clicked!");
// }

// title.addEventListener("click", handTitleClick);

function handTitleClick() {
  title.style.color = "blue";
}

title.addEventListener("click", handTitleClick);
