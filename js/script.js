// project links
var superheroQuizURL = `https://kjackson206.github.io/superhero-quiz/`
var schedulerURL = `https://kjackson206.github.io/work-day-scheduler/`
var jsQuizURL = `https://kjackson206.github.io/web-api/`

document.getElementById(`shButtonOne`).addEventListener(`click`, function () {
  window.open().location.href = superheroQuizURL;
});

document.getElementById(`wdButtonOne`).addEventListener(`click`, function () {
  window.open().location.href = schedulerURL;
});

document.getElementById(`jsButtonOne`).addEventListener(`click`, function () {
  window.open().location.href = jsQuizURL;
});

// repo links
var superheroRepoURL = `https://github.com/kjackson206/superhero-quiz`
var schedulerRepoURL = `https://github.com/kjackson206/work-day-scheduler`
var jsQuizRepoURL = `https://github.com/kjackson206/web-api`

document.getElementById(`shButtonTwo`).addEventListener(`click`, function () {
  window.open().location.href = superheroRepoURL;
});

document.getElementById(`wdButtonTwo`).addEventListener(`click`, function () {
  window.open().location.href = schedulerRepoURL;
});

document.getElementById(`jsButtonTwo`).addEventListener(`click`, function () {
  window.open().location.href = jsQuizRepoURL;
});


// top of page button

// (function () {
//   var topButton = document.getElementById(`btnTop`);
//   var topSection = document.getElementById(`topOfPage`);
//   var startingPoint = topSection.scrollTop() + topSection.scrollHeight();

//   window.on(`scroll`, function () {
//     if (window.scrollTop() > startingPoint) {
//       topButton.show();
//     } else {
//       topButton.hidden();
//     }
//   });

// })