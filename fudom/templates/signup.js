function yaz() {
    const email = document.getElementById('email').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const profilePicInput = document.getElementById('profile_pic');
    
    // Validate required fields
    if (!email || !username || !password) {
        alert('Please fill in all required fields.');
        return;
    }
    
    // Store text data
    window.localStorage.setItem('email', email);
    window.localStorage.setItem('username', username);
    if (password === document.getElementById('confirm_password').value) {
        window.localStorage.setItem('password', password);
        window.localStorage.setItem('logined', 'true');
    } else {
        alert('Passwords do not match.');
        return;
    }
    
    // Handle profile picture if uploaded
    if (profilePicInput.files.length > 0) {
        const reader = new FileReader();
        reader.onload = function(e) {
            window.localStorage.setItem('profile_pic', e.target.result);
            window.location.href = "logined.html";
        };
        reader.readAsDataURL(profilePicInput.files[0]);
    } else {
        window.localStorage.setItem('profile_pic', 'img/default_profile.png'); // Default profile picture
        window.location.href = "logined.html";
    }
}