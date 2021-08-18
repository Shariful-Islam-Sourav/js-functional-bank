document.getElementById("login-button").addEventListener("click",function(){
    //Get user email
    const emailField = document.getElementById("email-input");
    const userEmail = emailField.value;
    // Get user password
    const passField = document.getElementById("pass-input");
    const userPass = passField.value;
    if(userEmail == "user@email.com" && userPass == "1234"){
        window.location.href = "banking.html"
    } else{
        alert("Please enter a valid email address or password!")
    }
})