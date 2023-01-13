const jokeEl = document.getElementById('joke')
const jokebtn = document.getElementById('jokebtn')


jokebtn.addEventListener('click', generateJoke)
generateJoke() 

async function generateJoke(){
    const config = {
        headers: {
            'Accept' : 'application/json'
        }
    }

    const response = await fetch('https://icanhazdadjoke.com', config)
        // need to label function as ASYNC whenever you use await

    const data = await response.json()

    jokeEl.innerHTML = data.joke
    }


// function generateJoke(){
//     const config = {
//         headers: {
//             'Accept' : 'application/json'
//         }
//     }

//     fetch('https://icanhazdadjoke.com', config)
//     .then(response => response.json())
//     .then((data) => {
//         jokeEl.innerHTML = data.joke
//     })
// }