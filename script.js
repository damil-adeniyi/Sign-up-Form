const togglePassword = document.querySelector('#togglePassword');
const togglePassword1 = document.querySelector('#togglePassword-1');
const password = document.querySelector('#password');
const password1 = document.querySelector('#confirm-password');

togglePassword.addEventListener('click', function () {
    // Toggle the type attribute
        const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);

    // Toggle the icon (e.g., eye vs eye-slash)
    this.classList.toggle('fa-eye-slash');
});

togglePassword1.addEventListener('click', function () {
    // Toggle the type attribute
        const type = password1.getAttribute('type') === 'password' ? 'text' : 'password';
    password1.setAttribute('type', type);

    // Toggle the icon (e.g., eye vs eye-slash)
    this.classList.toggle('fa-eye-slash');
});
