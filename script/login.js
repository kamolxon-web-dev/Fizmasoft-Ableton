//  login js

let password = document.querySelector("#userpassword"),
    names = document.querySelector("#usertitle"),
    btn = document.querySelector(".btn  "),
    eye = document.querySelector(".eye");

eye.addEventListener('click', () => {
    if (password.getAttribute("type") == "password") {
        password.setAttribute('type', 'text')
    }
    else {
        password.setAttribute('type', 'password')
    }
})
eye.addEventListener('click', () => {
    if (password.getAttribute("type") == "password") {
        eye.classList.replace("bi-eye-slash", "bi-eye")
    }
    else {

        eye.classList.replace("bi-eye", "bi-eye-slash")
    }

})
btn.addEventListener('click', (e) => {

    e.preventDefault()

    let passwordUser = document.querySelector("#userpassword").value;
    let nameUser = document.querySelector("#usertitle").value;
    let URL = "http://localhost:2000/login";

    const addLogin = () => {
       
        fetch(`${URL}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                loginName: nameUser,
                loginPassword: passwordUser,
            })
        })


    }
    addLogin()
    window.location.replace("../index.html")

        localStorage.setItem("name", nameUser)
        // console.log(name)

}

)
let card_wrapper = document.querySelector('.card_wrapper')
let log = document.querySelector('.log');
log.addEventListener('click', () => {
    card_wrapper.classList.add('d-block')
})

let form = document.querySelector('.login_form')
form.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log("salom")
    card_wrapper.classList.add('d-none')
})








