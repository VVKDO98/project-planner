const addButton = document.querySelector("#newtask");
const formButton = document.getElementById("addnew");

const colTodo = document.getElementById("colTodo");
const colDoing = document.getElementById("colDoing");
const colDone = document.getElementById("colDone");

let taskArr = [];
const getLocalArray = JSON.parse(localStorage.getItem("addTask") || "[]");

function openModal() {
  const modal = document.getElementById("addTask");
  modal.style.visibility = "visible";
}

const dateDiff = (dateDue) => {
  const difftemps = new Date(dateDue).getTime() - new Date().getTime();
  const difftempsjour = Math.ceil(difftemps / (1000 * 3600 * 24));
  return difftempsjour + " jours restants";
};
formButton.addEventListener("click", newtask);
addButton.addEventListener("click", openModal);

function newtask() {
  console.log(document.getElementById("date").value);
  const name = document.getElementById("name").value;
  //Object
  let newTask = {
    id: Date.now(),
    name: document.getElementById("name").value,
    description: document.getElementById("description").value,
    dateDue: document.getElementById("date").value,
    status: document.getElementById("status").value,
  };
  console.log(dateDiff(newTask.dateDue));
  taskArr.push(newTask);
  console.log(taskArr);
  createElements(taskArr);

  //Hide modal window
  const modal = document.getElementById("addTask");
  modal.style.visibility = "hidden";

  localStorage.setItem("addTask", JSON.stringify(taskArr));
}

function createElements(elemArr) {
  let cardTask = (obj) => {
    console.log(obj);
    return `
      <div class="main__card">
        <h2 class="card__title">${obj.name}</h2>
        <p class="card__description">${obj.description}</p>
        <p class="card__date">${dateDiff(obj.dateDue)}</p>
        <img src="assets/img/flag.png" alt="" class="card__flag" />
        <button id="close__button">Delete</button>
      </div>`;
  };

  const localFilterOnTodo = elemArr.filter((elem) => elem.status === "todo");
  const localFilterOnDone = elemArr.filter((elem) => elem.status === "done");
  const localFilterOnDoing = elemArr.filter((elem) => elem.status === "doing");
  const wrapperTodo = document.querySelector("#colTodo");
  const wrapperDone = document.querySelector("#colDone");
  const wrapperDoing = document.querySelector("#colDoing");
  wrapperTodo.innerHTML = "";
  wrapperDone.innerHTML = "";
  wrapperDoing.innerHTML = "";
  localFilterOnTodo.forEach((e) => {
    wrapperTodo.insertAdjacentHTML("beforeend", cardTask(e));
  });
  localFilterOnDoing.forEach((e) => {
    wrapperDoing.insertAdjacentHTML("beforeend", cardTask(e));
  });
  localFilterOnDone.forEach((e) => {
    wrapperDone.insertAdjacentHTML("beforeend", cardTask(e));
  });
}
//Load localStorage on refresh
window.addEventListener("load", (e) => {
  taskArr = getLocalArray;
  createElements(taskArr);
});

//Filtering column
const filter = document.getElementById("filter");
function filterfu() {
  const filter = document.getElementById("filter");
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
