function attemptLogin() {
    
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    
    var credentials = {
        username: username,
        password: password
    };

    
    fetch('http://localhost:5500/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
    .then(response => {
        if (!response.ok) {
            alert('Username and password do not match!');
            throw new Error('Authentication failed');
        }
        
        return response.json();
    })
    .then(data => {
        
        console.log('Login successful:', data);

        
        sessionStorage.setItem('loggedInUser', username);

        
        window.location.href = 'index2.html';
    })
    .catch(error => {
        
        console.error('Login failed:', error);
    });
}
