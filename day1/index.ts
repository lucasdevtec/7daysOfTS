const user: string = "Lucas";
const h2 = document.querySelector("h3");

setTimeout(() => {
  if (h2) {
    h2.innerText = user;
  }
}, 1000);
