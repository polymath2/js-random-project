
'use strict'
const jokeContainer = document.getElementById('joke')
const button = document.querySelector('.btn')
const url = 'https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,sexist,explicit&type=single'


let getJoke = () =>{
    jokeContainer.classList.remove('fade')
    fetch(url).then(data =>data.json()).then(item=>
        jokeContainer.textContent =`${item.joke}`)

        jokeContainer.classList.add('fade');
    
}

button.addEventListener('click', function(){
    getJoke()
})