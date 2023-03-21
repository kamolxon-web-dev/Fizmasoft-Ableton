fetch("http://localhost:2000/jobs")
  .then((res) => res.json())
  .then((data) => dataRender(data));

function dataRender(e) {
  e.forEach((el) => {
    const card = createElement("div");
    card.classList.add("card");
    card.innerHTML = `
    
            <div class="card_body">
              <li class="li"><strong>name</strong> ${el.name}</li>
              <li class="li"><strong>surname</strong> ${el.surname}</li>
              <li class="li">
                <strong>birthday</strong> ${el.birthday}
              </li>
              <li class="li">
                <strong>email</strong> ${el.email}
              </li>
              <li class="li">
                <strong>email</strong> ${el.number}
              </li>
              <li class="li">
                <strong>about</strong> ${el.about}
              </li>
              <a href="tel:${el.number}" class="btn btn-success w-100">Call</a>
            </div>
    
    `
    $(".card_wrapper").appendChild(card);  
  });

}

