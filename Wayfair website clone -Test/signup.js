let signform = document.getElementById("signform")
signform.addEventListener("submit",goToWebsite)

function goToWebsite(e) {

      e.preventDefault();
      window.location.href = "http://127.0.0.1:5500/login%20page/login.html"; // Change redirect site here

    }