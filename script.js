const button = document.getElementById("loveBtn");
const surprise = document.getElementById("surprise");

button.addEventListener("click", () => {
  surprise.classList.remove("hidden");

  button.innerHTML = "Love You Mama ❤️";

  for (let i = 0; i < 25; i++) {
    createHeart();
  }
});

function createHeart() {
  const heart = document.createElement("div");

  heart.classList.add("heart");
  heart.innerHTML = "❤️";

  heart.style.left = Math.random() * window.innerWidth + "px";

  const size = Math.random() * 20 + 18;
  heart.style.fontSize = size + "px";

  const duration = Math.random() * 3 + 2;
  heart.style.animationDuration = duration + "s";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, duration * 1000);
}