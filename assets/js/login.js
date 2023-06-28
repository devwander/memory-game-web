const loginInput = document.querySelector(".loginInput")
const loginButton = document.querySelector(".loginButton")
const loginForm = document.querySelector(".loginForm")

const validadeInput = ({ target }) => {
    if (target.value.length > 2) {
        loginButton.removeAttribute('disabled')
    } else {
        loginButton.setAttribute('disabled', '')
    }
}

const handleSubmit = (e) => {
    e.preventDefault()

    localStorage.setItem('player', loginInput.value)
    window.location = 'pages/game.html'

    loginInput.value = ''
}

loginInput.addEventListener('input', validadeInput)
loginForm.addEventListener('submit', handleSubmit)