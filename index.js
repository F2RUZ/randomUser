const API = `https://randomuser.me/api/?results=50`;
const elCards = document.querySelector(".users__cards");
const elLoader = document.querySelector(".loader");
//getData

function getData(manba) {
  fetch(manba)
    .then((res) => res.json())
    .then((data) => showData(data.results));
}

// getData(API);

//showData

function showData(data) {
  if (data.length) {
    elLoader.classList.add("hidden");

    data.map((item) => {
      const elBox = `

 <li class="user__item">
<i class="ri-delete-bin-2-line icon"></i>
<img
  class="user__img"
  alt="User photo"
  src="${item.picture.large}"
  width="100"
  height="100"
/>
<div class="user__name">
  <span class="material-symbols-outlined">badge</span>
  <span>- ${item.name.title} ${item.name.first} ${item.name.last}</span>
</div>
<div class="user__year">
  <span class="material-symbols-outlined">cake</span>
  <span>- ${item.dob.age} years old.</span>
</div>
<div class="user__location">
  <span class="material-symbols-outlined">person_pin_circle</span>
  <span>-${item.location.country}, ${item.location.city}</span>
</div>
<div class="user__gender">
  <span class="material-symbols-outlined">man</span>
  <span>- ${item.gender}</span>
</div>
</li>`;

      elCards.innerHTML += elBox;
    });
  }
}

document.addEventListener("DOMContentLoaded", getData(API));

//Dark light mode

const body = document.querySelector("body");
const Moon = document.querySelector("#moon");
const Sun = document.querySelector("#sun");

function darkMode() {
  Sun.classList.toggle("hidden");
  Moon.classList.toggle("hidden");
}

Moon.addEventListener("click", () => {
  darkMode();
  body.classList.add("dark-mode");
  localStorage.setItem("mode", "dark-mode");
});

Sun.addEventListener("click", () => {
  darkMode();
  body.classList.remove("dark-mode");
  localStorage.clear();
});

// setLocalstorage

//getLocalstorage

const mode = localStorage.getItem("mode");

if (mode) {
  body.classList.add("dark-mode");
  darkMode();
} else {
  body.classList.remove("dark-mode");
}

//Search

const elinput = document.querySelector("#input");

elinput.addEventListener("input", (e) => {
  const inputValue = elinput.value.toLowerCase();

  const name = document.querySelectorAll(".user__name");

  name.forEach((item) => {
    if (!item.lastElementChild.textContent.toLowerCase().includes(inputValue)) {
      item.parentElement.classList.add("hidden");
    } else if (
      item.lastElementChild.textContent.toLowerCase().includes(inputValue)
    ) {
      !item.parentElement.classList.remove("hidden");
    }
  });
});

//deleteUsers

document.addEventListener("click", (e) => {
  if (e.target.classList[1] === "icon") {
    e.target.parentElement.remove();
  }
});
