const registerForm = document.getElementById('register-form');
const loginForm = document.getElementById('login-form');
const output = document.getElementById('output');

registerForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (username && email && password && confirmPassword) {
        if (password === confirmPassword) {
            // Register user
            const user = { username, email, password };
            localStorage.setItem('user', JSON.stringify(user));
            output.innerHTML = 'User registered successfully!';
        } else {
            output.innerHTML = 'Passwords do not match!';
        }
    } else {
        output.innerHTML = 'Please fill in all fields!';
    }
});

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username && password) {
        // Login user
        const user = JSON.parse(localStorage.getItem('user'));
        if (user && user.username === username && user.password === password) {
            output.innerHTML = 'User logged in successfully!';
        } else {
            output.innerHTML = 'Invalid username or password!';
        }
    } else {
        output.innerHTML = 'Please fill in all fields!';
    }
});
