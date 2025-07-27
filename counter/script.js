document.addEventListener("DOMContentLoaded", () => {
  decrementBtn = document.getElementById("decrement-btn");
  incrementBtn = document.getElementById("increment-btn");
  count = document.getElementById("count");

  let latestCount = count.innerText;
  count.innerText = latestCount;
  function decrementCounter() {
    console.log("Called dec");
    latestCount = latestCount - 1;
    count.innerText = latestCount;
  }

  function incrementCounter() {
    console.log("Called inc");
    latestCount = Number(latestCount) + 1;
    count.innerText = latestCount;
  }

  decrementBtn.addEventListener("click", decrementCounter);
  incrementBtn.addEventListener("click", incrementCounter);
});
