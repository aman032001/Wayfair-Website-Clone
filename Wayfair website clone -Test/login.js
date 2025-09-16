let logform=document.getElementById("logform")
logform.addEventListener("submit",goToWebsite)

alert("Your Account is Created Succesfully Now login with your Email and Password")

function goToWebsite(e) {

      
      e.preventDefault();
      // Redirect to any website you want
      window.location.href = "http://127.0.0.1:5500/index.html"; 
    }