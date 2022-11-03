// const h1 = document.querySelector("div.hello:first-child h1");

// function handTitleClick() {
//   const clickedClass = "clicked";
//   if (h1.classList.contains(clickedClass)) {
//     h1.classList.remove(clickedClass);
//   } else {
//     h1.classList.add(clickedClass);
//   }
// }

// h1.addEventListener("click", handTitleClick);
//위에 코드는 toggle로 줄일 수 있음

const h1 = document.querySelector("div.hello:first-child h1");

function handTitleClick() {
  h1.classList.toggle("clicked");
}

h1.addEventListener("click", handTitleClick);
