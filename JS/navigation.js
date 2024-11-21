function handleLogin() {
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

// accessUser()
function accessUser() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (emailPattern.test(email) && password !== "") {
    handleLogin()
    // window.location.href = "index.html";
  } else if (password === "") {
    alert("Please enter correct Email or Password");
  } else {
    alert("Please Enter a valid Email");
  }
}

// displayBooks()
function displayBooks() {
  console.log("Displayed");
}
