let counter = 0;

const countDown = setInterval(() => {
  counter = counter + 1;
  console.log(counter);
  if (counter == 5) {
    console.log("종료");
    clearInterval(countDown);
  }
}, 1000);
