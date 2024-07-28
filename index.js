const btnEl = document.querySelector(".btn");
const closeIconEl = document.querySelector(".close-icon");
const memoryContainerEl = document.querySelector(".memory-container");
const videoEl = document.querySelector("video");

btnEl.addEventListener("click", () => {
  memoryContainerEl.classList.remove("active");
});

closeIconEl.addEventListener("click", () => {
  memoryContainerEl.classList.add("active");
  videoEl.pause();
  videoEl.currentTime = 0;
});
