const username = document.getElementById("name");
const surname = document.getElementById("surname");
const phone = document.getElementById("phone");
const email = document.getElementById("email");
const tableContainer = document.querySelector(".table");
const tableRow = document.querySelector(".table-row");

const deleteBtn = document.querySelector(".table-btn");

const btn = document.getElementById("btn");

function printUser(e) {
  e.preventDefault();
  if (
    username.value !== "" &&
    surname.value !== "" &&
    phone.value !== "" &&
    email.value !== ""
  ) {
    const html = `
      <tr class="table-row">
      <td class="table-data">${username.value}</td>
      <td class="table-data">${surname.value}</td>
      <td class="table-data">${phone.value}</td>
      <td class="table-data">${email.value}</td>
      <td class="table-data"><button class="table-btn">X</button></td>
    </tr>
      `;
    tableContainer.insertAdjacentHTML("beforeend", html);

    username.value = "";
    surname.value = "";
    phone.value = "";
    email.value = "";
  }
}

btn.addEventListener("click", printUser);

function deleteUser(e) {
  console.log("Delete");

  if (!e.target.classList.contains("table-btn")) {
    return;
  }

  const btn = e.target;
  btn.closest("tr").remove();
}

tableContainer.addEventListener("click", deleteUser);

