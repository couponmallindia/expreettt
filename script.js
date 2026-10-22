document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("refreshButton").addEventListener("click", function () {
  const message = document.getElementById("refreshMessage");
  message.textContent = "Checking this page again…";
  this.disabled = true;
  this.style.opacity = ".75";
  window.setTimeout(() => window.location.reload(), 350);
});
