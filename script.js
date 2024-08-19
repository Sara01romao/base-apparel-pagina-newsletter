document.querySelector('.btn-submit').addEventListener('click', (evt) => {
    const email = document.getElementById('email').value;
    const iconeErro = document.getElementById('info-erro');
    const infoSend = document.querySelector('.info-send')


    evt.preventDefault();
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "" || !emailRegex.test(email)) {
        console.log(email)
        
       iconeErro.classList.add('active')
       infoSend.classList.add('active')
        
    } else {
        iconeErro.classList.remove('active')
        infoSend.classList.remove('active')
        document.getElementById('email').value ="";

    }
});