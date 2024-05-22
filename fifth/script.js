const user = {
  이름: "병수",
  나이: 20,
  주소: "시골",
};

localStorage.setItem("user", JSON.stringify(user));

//2
const userProfile = JSON.parse(localStorage.getItem("user"));

//3
userProfile.나이 = 30;
localStorage.setItem("user", JSON.stringify(userProfile));

//4
localStorage.removeItem("user");
console.log(JSON.parse(localStorage.getItem("user")));
