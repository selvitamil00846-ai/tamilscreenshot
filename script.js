// Show/hide forms
function showSignup() {
    document.getElementById('signup-container').style.display = 'block';
    document.getElementById('login-container').style.display = 'none';
    document.getElementById('dashboard-container').style.display = 'none';
}

function showLogin() {
    document.getElementById('signup-container').style.display = 'none';
    document.getElementById('login-container').style.display = 'block';
    document.getElementById('dashboard-container').style.display = 'none';
}

// Signup function
function signup() {
    const name = document.getElementById('signup-name').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;

    if (!name || !email || !password) {
        alert('Please fill all fields!');
        return;
    }

    // Check if user already exists
    if (localStorage.getItem(email)) {
        alert('Email already registered!');
        return;
    }

    // Save user in localStorage
    const user = { name, email, password };
    localStorage.setItem(email, JSON.stringify(user));

    alert('Signup successful!');
    showLogin();
}

// Login function
function login() {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    const userData = localStorage.getItem(email);
    if (!userData) {
        alert('User not found!');
        return;
    }

    const user = JSON.parse(userData);

    if (user.password !== password) {
        alert('Incorrect password!');
        return;
    }

    // Show dashboard
    document.getElementById('user-name').innerText = user.name;
    document.getElementById('signup-container').style.display = 'none';
    document.getElementById('login-container').style.display = 'none';
    document.getElementById('dashboard-container').style.display = 'block';
}

// Logout
function logout() {
    showLogin();
}
