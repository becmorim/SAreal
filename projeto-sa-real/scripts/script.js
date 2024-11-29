document.addEventListener("DOMContentLoaded", function() {
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');

    function addActiveClass(event) {
        event.target.classList.add('active');
    }

    function onTyping(event) {
        if (event.target.value !== '') {
            event.target.classList.add('typing');
        } else {
            event.target.classList.remove('typing');
        }
    }

    function removeActiveClass(event) {
        event.target.classList.remove('active');
    }

    usernameInput.addEventListener('focus', addActiveClass);
    passwordInput.addEventListener('focus', addActiveClass);

    usernameInput.addEventListener('blur', removeActiveClass);
    passwordInput.addEventListener('blur', removeActiveClass);

    usernameInput.addEventListener('input', onTyping);
    passwordInput.addEventListener('input', onTyping);
});