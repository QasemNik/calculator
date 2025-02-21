let displayBox = document.querySelector(".display");
function showDisplay(event) {
  
  const targetElem = event.target.innerText;
  
  if (displayBox.innerHTML === '0') {
        return displayBox.innerHTML = targetElem;
      } else{
        
      }
      return displayBox.innerHTML += targetElem;
}

function calculate() {
  try {
    let result = displayBox.innerText;

    if (result.includes("+") || result.includes("-") || result.includes("*") || result.includes("/")) {
      
      displayBox.innerText = eval(result);
    } else {
      displayBox.innerText = "Error: Invalid input";
    }
  } catch (error) {

    displayBox.innerHTML = `<div class='error-message'>Error: Invalid input</div>` ;
  }
}


function allClear() {
    displayBox.innerText = 0;
}

function clear() {
    let text = displayBox.innerText;
    if (text.length === 1) {
        displayBox.innerText = 0;
    } else { 
        displayBox.innerText = text.substring(0, text.length - 1)
    }
}
document.addEventListener("keydown", function(event) {
    const key = event.key;
    if (!isNaN(key) || key === "+" || key === "-" || key === "*" || key === "/") {
      showDisplay({ target: { innerText: key } });
    }
    if (key === "=" || key === "Enter") {
      calculate();
    }
    if (key === "c" || key === "C" || key === "Delete") {
      allClear();
    }
    if (key === "Backspace") {
      clear();
    }
  });
  

document.querySelector(".calculate").addEventListener("click", calculate);
document.querySelector(".all-clear").addEventListener("click", allClear);
document.querySelector(".clear-last").addEventListener("click", clear);
let list = document.querySelectorAll(".show-display");
list.forEach(item => {
    item.addEventListener("click", showDisplay)
})