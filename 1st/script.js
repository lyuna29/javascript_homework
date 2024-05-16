document.querySelector(".btn").addEventListener("click", function() {
    document.querySelector(".title").innerHTML = "제목아니다."
   })

   
   
function sum(num1, num2) {
    var result = num1 + num2;
    console.log("결과:", result);
}

sum(2, 3);

function isEvenOrOdd(num) {
    if (num % 2 === 0) {
        console.log(num + " 짝수입니다.");
    } else {
        console.log(num + " 홀수입니다.");
    }
}

isEvenOrOdd(9);
isEvenOrOdd(10);

const userName = "병수";
const age = 20;

console.log(`이름 : ${userName}`);
console.log(`나이 : ${age}`);