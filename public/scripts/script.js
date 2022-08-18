let filterBtn = document.querySelector(".btn-toggle-filter");

let filter = document.querySelector(".filter");

let viewMoreBtns = document.querySelectorAll(".btn-view-more");

filterBtn.addEventListener("click", function () {
  console.log(filter);

  filter.classList.toggle("filter-form-disabled");
});

viewMoreBtns.forEach((viewMoreBtn) => {
  viewMoreBtn.addEventListener("click", function () {});
});
