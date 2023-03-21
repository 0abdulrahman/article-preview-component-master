const shareBtn = document.querySelector(".share");
const popup = document.querySelector(".popup-mobile");

shareBtn.addEventListener("click", () => {
  popup.classList.toggle("active");
});
