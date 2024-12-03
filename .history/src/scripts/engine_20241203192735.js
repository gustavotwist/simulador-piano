const pianoKeys = document.querySelectorAll(".piano-keys .key");

pianoKeys.forEach((key) => {
    console.log(key.CDATA_SECTION_NODE.key);
    key.addEventListener("click",()=> playTune(key.dataset.key))
});