const products = [
  {
    이름: "철수",
    나이: "19",
    성별: "남",
  },
  {
    이름: "짱구",
    나이: "20",
    성별: "남",
  },
  {
    이름: "유리",
    나이: "21",
    성별: "여",
  },
];

const productsContainer = document.querySelector(".products-container");
const name = document.querySelectorAll(".name");
const age = document.querySelectorAll(".age");
const gender = document.querySelectorAll(".gender");

products.forEach(function (product) {
  let profile = `<div class="product">
    <h3 class="name">이름 : ${product.이름}</h3>
    <h3 class="age">나이 : ${product.나이}</h3>
    <h3 class="gender">성별 : ${product.성별}</h3>
</div>`;
  productsContainer.insertAdjacentHTML("beforeend", profile);
});

//3번
const girl = products.find((product) => {
  return (product.성별 = "여");
});
console.log(girl);

//4번
const boy = products.filter((product) => {
  return product.성별 === "남";
});

console.log(boy);

//5번
const older = products.map((product) => {
  return {
    이름: product.이름,
    나이: parseInt(product.나이) + 10, //문자열을 정수로 변환
    성별: product.성별,
  };
});
console.log(older);

//6번
const copiedProducts = [...products].sort(
  (a, b) => parseInt(b.나이) - parseInt(a.나이)
);

console.log(copiedProducts);
