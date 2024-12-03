const pianoKeys = document.querySelectorAll(".piano-keys .key");

const playTune = (key) => {};


pianoKeys.forEach((key) => {
    console.log(key.dataset.key);
    key.addEventListener("click", () => playTune(key.dataset.key));
});