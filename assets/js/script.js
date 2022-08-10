const addButton = document.querySelector("#newtask");

let taskArr = [];

function newtask() {
  let addTask = {
    name: "",
    description: "",
    date: "",
  };
  let task = addTask;
  task.name = prompt("Enter a name for your task");
  task.description = prompt("Describe your task");
  task.date = prompt("Enter a date");
  taskArr.push(addTask);

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
}

addButton.addEventListener("click", newtask);

//Différence de temps
let datestart = new Date();
let dateend = new Date(prompt("Enter a date"));

let datediff = (datestart, dateend) => {
  let difftemps = dateend.getTime() - datestart.getTime();
  let difftempsjour = Math.ceil(difftemps / (1000 * 3600 * 24));
  return difftempsjour;
};

console.log(datediff(datestart, dateend));
