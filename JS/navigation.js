function accessUser() {
  // After successful login, retrieve the stored URL
  var lastPage = localStorage.getItem("lastPage");
  // Redirect to the stored URL or default to the homepage
  if (lastPage) {
    window.location.href = lastPage;
  } else {
    window.location.href = "homepage.html";
    // Default page
  }
}

// displayLogin()
function displayLogin() {
  // Store the current page URL
  localStorage.setItem("lastPage", window.location.href);
  // Redirect to the login page
  window.location.href = "login.html";
}

// login()
function login() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (emailPattern.test(email) && password !== "") {
    accessUser()
    // window.location.href = "index.html";
  } else {
    alert("Please enter correct Email or Password");
  }
}

// displayBooks()
function displayBooks() {
  console.log("Displayed");
}


