const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const searchBtn = document.getElementById("search-btn");
const result = document.querySelector(".result");
const sound = document.getElementById("sound");
searchBtn.addEventListener("click", function () {
  let inputword = document.getElementById("input-word").value;

  fetch(`${url}${inputword}`)
    .then((response) => response.json())
    .then((data) => {

      result.innerHTML = `
    <div class="word">
    <h3>${inputword}</h3>
    <button class="play" onclick="playSound()"> Listen</button>
  </div>
  <div class="details">
   
    <p>${data[0].meanings[0].partOfSpeech}</p>
      <p>/${data[0].phonetic || " "}/</p>
  </div>
  <p class="word-meaning">${data[0].meanings[0].definitions[0].definition}</p>
  <p class="word-example"> example: ${
    data[0].meanings[0].definitions[0].example || " "
  }</p>


  `;
      sound.setAttribute("src", `${data[0].phonetics[0].audio || data[0].phonetics[1].audio}`);
    })
    .catch(() => {
      result.innerHTML = `<h3>Couldn't find word </h3>`;
    });
});

function playSound() {
  sound.play();
}
