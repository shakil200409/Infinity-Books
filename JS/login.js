// displayLogin()
function displayLogin() {
  window.location.href = "/login.html";
}

// accessUser()
function accessUser() {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (emailPattern.test(email) && password !== '') {
    window.location.href = "index.html";
  } else if (password === "") {
    alert("Please enter correct Email or Password");
  } else {
    alert('Please Enter a valid Email')
  }
}
