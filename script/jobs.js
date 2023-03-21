let jobsUrl = "http://localhost:2000/jobs"



let names = document.querySelector('#jobsName');
let surname = document.querySelector('.jobsSurname');
let email = document.querySelector('.jobsEmail');
let about = document.querySelector('.jobsAbout');
let birthday = document.querySelector('.jobsBirthday');
let btn = document.querySelector('.btn');
let img = document.querySelector('.display_img')
let jobsImg = document.querySelector('#jobsImg')
var uploded_img = ""














jobsImg.addEventListener('change', function () {
    console.log(jobsImg.value)
    const reader = new FileReader();
    reader.addEventListener('load', () => {
        uploded_img = reader.result;
        img.style.backgroundImage = `url("${uploded_img}")`
    })
    reader.readAsDataURL(this.files[0]);

})





const getJobs = () => {

    const names = $("#jobsName").value.trim();
    const surname = $("#jobsSurname").value.trim();
    const email = $("#jobsEmail").value.trim();
    const about = $("#jobsAbout").value.trim();
    const birthday = $("#jobsBirthday").value.trim();
    let jobsImg = document.querySelector('#jobsImg').value;
    let jobsNumber = document.querySelector('#jobsNumber').value;

    if (names.length > 0 && surname.length > 0 && about.length > 0 && birthday.length > 0 && jobsImg.length > 0 && jobsNumber.length > 0) {

        fetch(`${jobsUrl}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: names,
                img: jobsImg,
                surname: surname,
                number: jobsNumber,
                email: email,
                about: about,
                birthday: birthday,
            }),
        });
    }
}







btn.addEventListener('click', () => {
    getJobs()
})





// myModal.addEventListener('shown.bs.modal', () => {
//     myInput.focus()
// })


