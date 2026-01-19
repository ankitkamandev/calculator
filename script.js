let displayNum = 0;
const numeralBtns = document.querySelectorAll(".numeral");
const input = document.querySelector(".display");

numeralBtns.forEach((btn) => {
    
    // 3. Typo fix: It is ".addEventListener", not ".eventListener"
    btn.addEventListener("click", (e) => {
        
        // 4. In arrow functions, use 'e.target' instead of 'this'
        const value = e.target.innerText;
        
        input.value += value;
        displayNum += value; 
        
        // Optional: Log to check it's working
        console.log("Current number string:", displayNum);
    });
});