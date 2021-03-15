const form = document.getElementById("form")

const validateEmail = (email) => {
    const emailRegex = /^(([^<>()\[\]\\.,:\s@"]+(\.[^<>()\[\]\\.,:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    return emailRegex.test(email)
}


form.addEventListener('submit', (e) =>{
    e.preventDefault()
    const email = form.email.value
    const errorMessage = document.createElement('p')

    if(!validateEmail(email) && !form.lastElementChild.classList.contains('form--error')){
        errorMessage.classList.add('form--error')
        errorMessage.textContent = 'Please provide a valid email'

        form.appendChild(errorMessage)

        form.email.classList.add('form__input--error')
        form.submit.classList.add('form__button--error')

        setTimeout(() => {
            form.email.classList.remove('form__input--error')
            form.submit.classList.remove('form__button--error')
            errorMessage.remove()
        }, 3000)
    }
})