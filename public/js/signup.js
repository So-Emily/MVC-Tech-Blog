// public/js/signup.js
document.querySelector('#signup-form').addEventListener('submit', async (event) => {
    event.preventDefault();

    const username = document.querySelector('input[name="username"]').value.trim();
    const email = document.querySelector('input[name="email"]').value.trim();
    const password = document.querySelector('input[name="password"]').value.trim();

    if (username && email && password) {
        const response = await fetch('/users/signup', {
            method: 'POST',
            body: JSON.stringify({ username, email, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/'); // Redirect to homepage
        } else {
            alert('Failed to sign up.');
        }
    }
});