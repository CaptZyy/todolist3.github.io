document.getElementById("loginForm").addEventListener ("submit", (event) => {
    event.preventDefault();
    const username = document.getElementById("username")
    const password = document.getElementById("password")

    const loginButton = document.querySelector("#loginButton")

   const storedUsername = localStorage.getItem("username")
   const storedPassword = localStorage.getItem("password")

   loginButton.onclick = () => {
    if(username.value == storedUsername && password.value == storedPassword){
        alert("Login Successfully!")
        window.location.href = "home.html"
    }
    else{
        alert("Wrong Password or Username")
    }
        
   }
})

