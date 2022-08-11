const addButton = document.querySelector("#newtask");
const formButton = document.getElementById("addnew");

let taskArr = [];
const getLocalArray = JSON.parse(localStorage.getItem("addTask") || "[]");

function openModal() {
  const modal = document.getElementById("addTask");
  modal.style.visibility = "visible";
}

addButton.addEventListener("click", openModal);

function newtask() {
  //Object
  let addTask = {
    name: "",
    description: "",
    date: "",
  };
  //Create object
  let task = addTask;
  task.name = document.getElementById("name").value;
  task.description = document.getElementById("description").value;
  task.date = document.getElementById("date").value;
  //Push object
  taskArr.push(addTask);
  //Generate card
  let cardTask = `
            <div class="main__card">
              <h2 class="card__title">${task.name}</h2>
              <p class="card__description">${task.description}</p>
              <p class="card__date">${task.date}</p>
              <img src="assets/img/flag.png" alt="" class="card__flag" />
            </div>`;
  //Push card in column
  document
    .querySelector(".main__todo")
    .insertAdjacentHTML("beforeend", cardTask);
  //Hide modal window
  const modal = document.getElementById("addTask");
  modal.style.visibility = "hidden";
  //Add to local storage
  if (localStorage.getItem("addTask") == null) {
    localStorage.setItem("addTask", []);
  }
  getLocalArray.push(addTask);
  localStorage.setItem("addTask", JSON.stringify(getLocalArray));
}

window.addEventListener("load", (e) => {
  const add = getLocalArray.map((x) => {
    let cardTask = `
    <div class="main__card">
      <h2 class="card__title">${x.name}</h2>
      <p class="card__description">${x.description}</p>
      <p class="card__date">${x.date}</p>
      <img src="assets/img/flag.png" alt="" class="card__flag" />
    </div>`;
    //Push card in column
    document
      .querySelector(".main__todo")
      .insertAdjacentHTML("beforeend", cardTask);
  });
});

formButton.addEventListener("click", newtask);
