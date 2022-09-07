const enter = document.querySelector('#enter')
const errorImg = document.querySelector('#error')
const errorMsg = document.querySelector('#errorMessage')
let input = document.querySelector('input[type="text"]')

errorImg.style.display = 'none'
errorMsg.style.display = 'none'

enter.addEventListener('click', () => {
    input.style.borderColor = 'hsl(0, 93%, 68%)'
    if (input.value) {
        localStorage.setItem('email', input.value)
        const email = localStorage.getItem('email')
        if (!email.includes('@')) {
            errorMsg.style.display = 'block'
            errorImg.style.display = 'block'
        } else if (!email.includes('.')) {
            errorMsg.style.display = 'block'
            errorImg.style.display = 'block'
        } else {
            errorMsg.style.display = 'block'
            errorImg.style.display = 'none'
            errorMsg.style.color = 'rgb(20, 231, 20)'
            errorMsg.textContent = '✅Congratulations! check your email to continue📧..'
        }
    } else {
        errorMsg.style.display = 'block'
        errorImg.style.display = 'block'
        input.value = null
    }
})