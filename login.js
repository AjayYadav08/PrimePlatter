const emailInput = document.getElementById('email');
const emailError = document.getElementById('emailError');

emailInput.addEventListener("input", () => {
    
    emailError.textContent = 
        emailInput.value.includes("@") ? "" : "Invalid Email";
        
    
    if (!emailInput.value.includes("@") && emailInput.value.length > 0) {
        emailInput.style.borderColor = "red";
        emailError.style.color = "red";
        emailError.style.margin="10px";

    } else {
        emailInput.style.borderColor = "#eee"; 
    }
});
