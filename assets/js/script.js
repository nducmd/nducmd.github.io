function toggleLogin() {
    document.getElementById("login").style.display = "block";
    document.getElementById("register").style.display = "none";
    document.querySelector('.login-nav__item.active').classList.remove('active');
    document.querySelector('.login-nav__item:nth-child(1)').classList.add('active');
}

function toggleRegister() {
    document.getElementById("login").style.display = "none";
    document.getElementById("register").style.display = "block";
    document.querySelector('.login-nav__item.active').classList.remove('active');
    document.querySelector('.login-nav__item:nth-child(2)').classList.add('active');
}

function validateForm() {
    // Fetching values from inputs
    var username = document.getElementById('username').value.trim();
    var password = document.getElementById('password').value;
    var rePassword = document.getElementById('rePassword').value;
    var email = document.getElementById('email').value.trim();
    // console.log(username);
    // console.log(password);
    // console.log(rePassword);
    // console.log(email);
  
    // Resetting previous error messages
    document.getElementById('usernameError').textContent = "";
    document.getElementById('passwordError').textContent = "";
    document.getElementById('rePasswordError').textContent = "";
    document.getElementById('emailError').textContent = "";
  
    // Validating username
    if (username === "") {
      document.getElementById('usernameError').textContent = "Username is required";
      //return ;
    }
  
    // Validating password
    if (password === "") {
      document.getElementById('passwordError').textContent = "Password is required";
      //return ;
    }
  
    // Validating password match
    if (password !== rePassword) {
      document.getElementById('rePasswordError').textContent = "Passwords do not match";
      //return ;
    }
  
    // Validating email
    if (email === "") {
      document.getElementById('emailError').textContent = "Email is required";
      //return ;
    } else if (!isValidEmail(email)) {
      document.getElementById('emailError').textContent = "Invalid email format";
      //return ;
    }
  
    //return ; // Form submission allowed
  }
  
  function isValidEmail(email) {
    // Basic email format validation
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }