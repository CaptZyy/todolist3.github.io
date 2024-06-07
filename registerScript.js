
document.getElementById("registerForm").addEventListener ("submit", (event) => {
    event.preventDefault();
    const username = document.getElementById("username")
    const password = document.getElementById("password")

    const registerButton = document.querySelector("#registerButton")

   const storedUsername = localStorage.getItem("username")
   const storedPassword = localStorage.getItem("password")

   registerButton.onclick = () => {
    localStorage.setItem("username", username.value)
    localStorage.setItem("password", password.value)

    alert("User Registered Successfully")
    window.location.href = "index.html"

    console.log("Registered!")
    console.log(eachUser)
   }
})

