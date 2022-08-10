const addButton = document.querySelector("#newtask");
const formButton = document.getElementById("addnew");

let taskArr = [];

// function newtask() {
//   let addTask = {
//     name: "",
//     description: "",
//     date: "",
//   };
//   let task = addTask;
//   task.name = prompt("Enter a name for your task");
//   task.description = prompt("Describe your task");
//   task.date = new Date(prompt("Enter a date"));

//   let datestart = new Date();
//   let difftemps = task.date.getTime() - datestart.getTime();
//   let difftempsjour = Math.ceil(difftemps / (1000 * 3600 * 24));

//   taskArr.push(addTask);

//   let cardTask = `
//         <div class="main__card">
//           <h2 class="card__title">${task.name}</h2>
//           <p class="card__description">${task.description}</p>
//           <p class="card__date">${difftempsjour + " jours restant"}</p>
//           <img src="assets/img/flag.png" alt="" class="card__flag" />
//         </div>`;
//   document
//     .querySelector(".main__todo")
//     .insertAdjacentHTML("beforeend", cardTask);
// }

function openModal() {
  const modal = document.getElementById("addTask");
  modal.style.visibility = "visible";
}

addButton.addEventListener("click", openModal);

function newtask() {
  let addTask = {
    name: "",
    description: "",
    date: "",
  };
  let task = addTask;
  task.name = document.getElementById("name").value;
  task.description = document.getElementById("description").value;
  task.date = document.getElementById("date").value;

  taskArr.push(addTask);
  console.log(taskArr);

  let cardTask = `
            <div class="main__card">
              <h2 class="card__title">${task.name}</h2>
              <p class="card__description">${task.description}</p>
              <p class="card__date">${task.date}</p>
              <img src="assets/img/flag.png" alt="" class="card__flag" />
            </div>`;
  document
    .querySelector(".main__todo")
    .insertAdjacentHTML("beforeend", cardTask);

  const modal = document.getElementById("addTask");
  modal.style.visibility = "hidden";
}

formButton.addEventListener("click", newtask);
