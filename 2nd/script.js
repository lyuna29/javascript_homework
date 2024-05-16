document.getElementById("container");

document.addEventListener("click", function (event) {
  if (event.target.classList.contains("box")) {
    if (event.target.classList.contains("clicked")) {
      event.target.classList.remove("clicked");
    } else {
      event.target.classList.add("clicked");
    }
  }
});

// 2 번
function getSquare(number) {
  return number * number;
}

const result = getSquare(5);
console.log(result); // 25 출력 (5의 제곱)
