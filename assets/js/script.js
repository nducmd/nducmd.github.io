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