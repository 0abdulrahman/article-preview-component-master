const shareBtn = document.querySelector(".share");
const popup = document.querySelector(".popup-mobile");

shareBtn.addEventListener("click", () => {
  shareBtn.classList.toggle("active");
  popup.classList.toggle("active");
});
