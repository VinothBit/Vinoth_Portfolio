'use strict';


const elementToggleFunc = function (elem) {
  elem.classList.toggle("active");
}


const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");


sidebarBtn.addEventListener("click", function () {
  elementToggleFunc(sidebar);
});

const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImage");
const profileImg = document.querySelector("[data-profile-img]");
const closeBtn = document.querySelector(".close-btn");

if (profileImg) {
    profileImg.addEventListener('click', function() {
        modal.style.display = "block";
        modalImg.src = this.src; 
    });
}

if (closeBtn) {
    closeBtn.addEventListener('click', function() {
        modal.style.display = "none";
    });
}

window.addEventListener('click', function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});


const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");
const filterItems = document.querySelectorAll("[data-filter-item]");

if (select) {
  select.addEventListener("click", function () {
    elementToggleFunc(this);
  });
}


for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {
    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterProjectItems(selectedValue);
  });
}


const filterProjectItems = function (selectedValue) {
  for (let i = 0; i < filterItems.length; i++) {
    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }
  }
}

let lastClickedBtn = null;
if (filterBtn.length > 0) {
  lastClickedBtn = filterBtn[0];
}

for (let i = 0; i < filterBtn.length; i++) {
  filterBtn[i].addEventListener("click", function () {
    let selectedValue = this.innerText.toLowerCase();
    filterProjectItems(selectedValue);

    if (lastClickedBtn) {
      lastClickedBtn.classList.remove("active");
    }
    this.classList.add("active");
    lastClickedBtn = this;
  });
}


const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");


for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }
  });
}