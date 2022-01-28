let form = document.querySelector('#registerForm');
let divComuna = document.querySelector('.comuna');

form.addEventListener('submit', validateForm);

function validateForm(evento) {
    evento.preventDefault();
    let ok = true;
    
    let form = evento.target;
    let { name, middlename, lastname, email, state, address } = form;
    
    let soloLetras = /^[a-zA-Z\s]+$/;

    let feedName = document.querySelector('#feed-name');
    let feedLastname = document.querySelector('#feed-lastname');

    if (name.value === "") {
        ok = false;
        name.classList.add('is-invalid');
        feedName.innerHTML = "Please insert a name.";
    } else if (!soloLetras.test(name.value)) {
        ok = false;
        name.classList.add('is-invalid');
        feedName.innerHTML = "Only can contain letters.";
    } else {
        name.classList.remove('is-invalid');
    }

    if (lastname.value === "") {
        ok = false;
        lastname.classList.add('is-invalid');
    } else if (!soloLetras.test(lastname.value)) {
        ok = false;
        lastname.classList.add('is-invalid');
        feedLastname.innerHTML = "Only can contain letters.";
    } else {
        lastname.classList.remove('is-invalid');
    }



    if (!ok) return;
    form.submit();
}

form.state.addEventListener('change', (event) => {
    if(event.target.value !== ""){
        divComuna.classList.remove('d-none');
    }
})