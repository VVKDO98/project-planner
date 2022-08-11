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
  // //Push card in column
  // document
  //   .querySelector(".main__todo")
  //   .insertAdjacentHTML("beforeend", cardTask);
  //Hide modal window
  const modal = document.getElementById("addTask");
  modal.style.visibility = "hidden";
  //Add to local storage
  if (localStorage.getItem("addTask") == null) {
    localStorage.setItem("addTask", []);
  }
  getLocalArray.push(addTask);
  localStorage.setItem("addTask", JSON.stringify(getLocalArray));
  // select

  const option1 = document.getElementById("option1");
  const option2 = document.getElementById("option2");
  const option3 = document.getElementById("option3");
  const status = document.getElementById("choice");

  if (status.value === "todo") {
    document
      .querySelector(".main__todo")
      .insertAdjacentHTML("beforeend", cardTask);
  }

  if (status.value === "doing") {
    document
      .querySelector(".main__doing")
      .insertAdjacentHTML("beforeend", cardTask);
  }

  if (status.value === "done") {
    document
      .querySelector(".main__done")
      .insertAdjacentHTML("beforeend", cardTask);
  }
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

const filter = document.getElementById("filter");

//Filtering column
function filterfu() {
  const filter = document.getElementById("filter");
  const colTodo = document.getElementById("colTodo");
  const colDoing = document.getElementById("colDoing");
  const colDone = document.getElementById("colDone");
  if (filter.value === "all") {
    colTodo.style.display = "block";
    colDoing.style.display = "block";
    colDone.style.display = "block";
  }
  if (filter.value === "todo") {
    colTodo.style.display = "block";
    colDoing.style.display = "none";
    colDone.style.display = "none";
  }
  if (filter.value === "doing") {
    colTodo.style.display = "none";
    colDoing.style.display = "block";
    colDone.style.display = "none";
  }
  if (filter.value === "done") {
    colTodo.style.display = "none";
    colDoing.style.display = "none";
    colDone.style.display = "block";
  }
}

filter.addEventListener("change", filterfu);
