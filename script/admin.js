"use strict";
let baseUrl = "http://localhost:2000";
const fetchData = async () => {
  const response = await fetch(`${baseUrl}/task`);
  const result = await response.json();
  console.log(result);
  dataRender(result);
};
fetchData();

function dataRender(data = []) {
  data.length > 0
    ? data.forEach((el) => {
      const tr = createElement(
        "tr",
        "item",
        `
 
            <td>${el.id}</td> 

            <td>${el.title}</td>
            <td>${el.desc}</td>
        <td>${el.date}</td>
     <td><button class="btn btn-warning" data-bs-toggle="modal" data-bs-target="#exampleModal" data-edit="${el.id}">Edit</button></td>
        <td><button class="btn btn-danger " data-clear="${el.id}">Clear</button></td>


`
      );
      $("#data").appendChild(tr);
    })
    : "not found";
}

dataRender();
const addTask = () => {
  const taskTitle = $("#taskTitle").value.trim();
  const taskDesc = $("#taskDesc").value.trim();
  const taskDate = $("#taskDate").value.trim();

  if (
    taskTitle.length === 0 ||
    taskDesc.length === 0 ||
    taskDate.length === 0
  ) {
    alert("malumotlarni tuldiring");
  } else {
    fetch(`${baseUrl}/task`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: taskTitle,
        desc: taskDesc,
        date: taskDate,
      }),
    });
  }
};

$("#add").addEventListener("click", () => {
  addTask();
});


$("#data").addEventListener("click", (e) => {
  if (e.target.classList.contains("btn-danger")) {
    console.log(e.target);
    let id = e.target.getAttribute("data-clear");
    deleteUser(id);
  }
});
// delete user

const deleteUser = (id) => {
  setTimeout(() => {
    Toastify({
      text: "This task cleared",
      className: "info",
      duration: 1500,
      style: {
        background: "linear-gradient(to right, #00b09b, #96c93d)",
        top: "200px",
        transition: "1.5s",
      },
    }).showToast();
  }, 700);

  setTimeout(() => {
    fetch(`${baseUrl}/task/${id}`, {
      method: "DELETE",
      headers: {
        "Contanet-Type": "application/json",
      },
    });
  }, 2000);
};
// edit function

$("#data").addEventListener("click", (e) => {

  if (e.target.classList.contains("btn-warning")) {
    let clearId = e.target.getAttribute("data-edit");
    localStorage.setItem('editUser', clearId)
    fetch(`${baseUrl}/task/${clearId}`)
      .then((response) => response.json())
      .then((result) => setValue(result))
      .catch((err) => console.log(err))

  }
});


const updateUser = () => {
  let id = localStorage.getItem('editUser')
  console.log(id)
  let newUser = $('#editTitle').value.trim();
  let newDesc = $('#editDesc').value.trim();
  let newDate = $('#editDate').value.trim();
  console.log(newDesc)
  if (newUser.length === 0 || newDesc.length === 0 || newDate.length === 0) {
    Toastify({
      text: "Malumotlar yetarli emas !",
      className: "info",
      style: {
        background: "linear-gradient(to right, #00b09b, #96c93d)",
      }
    }).showToast();
  }
  else {
    fetch(`${baseUrl}/task/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: newUser,
        desc: newDesc,
        date: newDate,
      })
    })
  }


}

$('#sendUser').addEventListener('click', () => {
  updateUser()
})
function setValue(data) {

  $('#editTitle').value = data.title;
  $('#editDesc').value = data.desc;
  $('#editDate').value = data.date;

}
// setValue()