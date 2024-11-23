// registerUser()
function registerUser() {
  const userName = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (userName !== "" && emailPattern.test(email) && password !== "") {
    accessUser();
    // window.location.href = "index.html";
  } else if (userName === "") {
    alert("Please enter Your Name");
  } else if (email === "") {
    alert("Please enter Your Email");
  } else if (password === "") {
    alert("Please enter at least 8 character password");
  } else {
    alert("Please Enter all your information");
  }
}
// register()
function register() {
  const userPage = document.getElementById("login-page");
  userPage.innerHTML = "";
  const registration = document.createElement("body");
  registration.classList = "";
  registration.innerHTML = `
      <section class="flex">
        <div
          class="flex flex-col-reverse md:flex-row items-center mx-auto"
        >
          <figure class="md:w-1/2 md:px-5">
            <img
              class="object-contain w-full h-full"
              src="assets/login.svg"
              alt="Login"
            />
          </figure>
          <div class="w-11/12 md:w-1/2 flex flex-col items-center text-center py-5 md:py-10">
            <h2 class="card-title font-bold text-2xl lg:text-3xl text-brand my-3 md:my-4">
              WELCOME BACK!
            </h2>
            <!-- Input Forms -->
            <form class="text-left flex flex-col gap-5 w-full md:w-4/5">
              <label class="flex flex-col gap-1 md:gap-2 lg:gap-3 font-bold" for="Name"
                >Name
                <input name="name" id="name"
                  type="text"
                  placeholder="Enter Your name"
                  class="input input-bordered border-2 py-2 md:py-4 lg:py-7 rounded-md md:rounded-lg lg:rounded-xl w-full placeholder:text-sm lg:placeholder:text-base"/>
              </label>
              <label class="flex flex-col gap-1 md:gap-2 lg:gap-3 font-bold" for="Email"
                >Email
                <input id="email"
                  type="text"
                  placeholder="Enter Your mail address"
                  class="input input-bordered border-2 py-2 md:py-4 lg:py-7 rounded-md md:rounded-lg lg:rounded-xl w-full placeholder:text-sm lg:placeholder:text-base"/>
              </label>
              <label class="flex flex-col gap-1 md:gap-2 lg:gap-3 font-bold" for="Password"
                >Password
                <input id="password"
                  type="text"
                  placeholder="Enter password"
                  class="input input-bordered border-2 py-2 md:py-4 lg:py-7 rounded-md md:rounded-lg lg:rounded-xl w-full placeholder:text-sm lg:placeholder:text-base"/>
              </label>
            </form>
            <!-- Buttons -->
            <div class="w-full md:w-4/5 my-3 md:my-5 flex flex-col gap-3">
              <button onclick="registerUser()" class="w-full bg-brand py-2 lg:py-3 text-white font-bold text-base md:text-lg lg:text-xl rounded-md md:rounded-lg lg:rounded-xl">Create account</button>
              <span class="text-xs md:text-sm lg:text-base">Or Singup with</span>
              <button class="w-full py-2 lg:py-3 font-semibold text-sm md:text-base lg:text-lg rounded-md md:rounded-lg lg:rounded-xl flex items-center justify-center gap-2 border border-black">
                <img class="w-5 md:w-6 lg:w-7" src="https://img.icons8.com/?size=100&id=V5cGWnc9R4xj&format=png&color=000000" alt="Google logo">
                Sign in with Google
              </button>
            </div>
            <p class="text-xs md:text-sm lg:text-base">Already have an account? <a class="text-brand" href="login.html">Log in</a></p>        
          </div>
        </div>
      </section>
    `;
  userPage.append(registration);
}
