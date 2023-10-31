if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("/sw.js", { scope: "/offline-game-example" })
    .then(function (registration) {
      console.log("Service Worker registrato con successo:", registration);
    })
    .catch(function (error) {
      console.log("La registrazione del Service Worker non è riuscita:", error);
    });
}

document.addEventListener("keydown", jump);

function jump(event) {
  if (event.keyCode === 32) {
    // spazio
    let player = document.getElementById("player");
    player.style.animation = "jump 0.5s";
  }
}

document.getElementById("player").addEventListener("animationend", () => {
  document.getElementById("player").style.animation = "";
});
