const authBtn = document.getElementById('auth-btn')
const regBtn = document.getElementById('reg-btn')

const authModal = document.getElementById('authModal')
const regModal = document.getElementById('regModal')

authBtn.addEventListener('click', () => {
    authModal.style.display = 'block';
    authModal.classList.add('show');
})

regBtn.addEventListener('click', () => {
    regModal.style.display = 'block';
    regModal.classList.add('show');
})

authModal.querySelector('.btn-close').addEventListener('click', () => {
    authModal.style.display = 'none';
    authModal.classList.remove('show');
})

regModal.querySelector('.btn-close').addEventListener('click', () => {
    regModal.style.display = 'none';
    regModal.classList.remove('show');
})