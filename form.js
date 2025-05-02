const signUpButton = document.getElementById("signUp");
const signInButton = document.getElementById("signIn");
const container = document.getElementById("container");

signUpButton.addEventListener("click", () => {
  container.classList.add("right-panel-active");
});

signInButton.addEventListener("click", () => {
  container.classList.remove("right-panel-active");
});

document.getElementById("submit").addEventListener("click", function (e) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regex to validate email format

  const email = document.getElementById("email").value.trim();

  let isValid = true;
  if (email === "") {
    alert("Please fill in all required fields.");
    isValid = false;
  }

  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address.");
    isValid = false;
  }
  if (isValid) {
    alert("Account Created Successfully");
    window.location.href = "http://127.0.0.1:5500/For_Project/form.html";
  }
  // window.location.href = "index.html";
  // } else {
  //   e.preventDefault(); // Prevent form submission
  // }
});

let mockUserName = localStorage.getItem("username");
let mockUser_Email = localStorage.getItem("email");
let mockPassword = localStorage.getItem("password");

// let isLoggedIn;
function loginsub() {
  let email = document.getElementById("reqemail").value.trim();
  let password = document.getElementById("reqpassword").value.trim();
  // console.log(email, password, mockUserName, mockPassword, mockUser_Email);

  if (email === mockUser_Email && password === mockPassword) {
    // isLoggedIn = true;
    alert("Login success!");
    window.location.href = "http://127.0.0.1:5500/For_Project/index.html"; //load a new document
  } else {
    alert("Login Failure!");
  }

  if (email === "" && password === "") {
    alert("Please enter email and password");
  }
}
