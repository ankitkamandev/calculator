let displayNum = "";
const input = document.querySelector(".display");

const allInputBtns = document.querySelectorAll(".numeral, .operator");

allInputBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const value = e.target.innerText;
    input.value += value;
    displayNum += value;
    console.log("Current number string:", displayNum);
  });
});

// Equal Button
let equalBtn = document.querySelector(".equal");

equalBtn.addEventListener("click", () => {
  try {
    let result = eval(displayNum);

    input.value = result;

    displayNum = result.toString();
  } catch (error) {
    input.value = "Error";
    displayNum = "";
  }
});

//  Clear Button
const clearBtn = document.querySelector(".clear");

if (clearBtn) {
  clearBtn.addEventListener("click", () => {
    input.value = "";
    displayNum = "";
  });
}

// 4. Handle Backspace Button
const bscBtn = document.querySelector(".backspace");

if (bscBtn) {
  bscBtn.addEventListener("click", () => {
    displayNum = displayNum.slice(0, -1);
    input.value = displayNum;
  });
}
