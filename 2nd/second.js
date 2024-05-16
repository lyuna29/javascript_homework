document.getElementById("content");

window.addEventListener("scroll", () => {
  console.log(scrollY);
});

//4
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

//5
for (let i = 2; i <= 20; i += 2) {
  console.log(i);
}

//6
setTimeout(() => {
  console.log("3초 뒤에 출력되는 텍스트 입니다");
}, 3000);
