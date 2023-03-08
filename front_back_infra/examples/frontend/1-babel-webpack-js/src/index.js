const { test } = require("./helper");

// точка входа исполнения
window.onload = () => {
  const a = 1;
  const clickButton = document.querySelector("#click");

  clickButton.onclick = () => {
    console.log(test(a));
  };
};
