let h3 = document.querySelector('h3')
let btn = document.querySelector('button')
btn.addEventListener('click', async () => {
    // let url = 
    let arr = ['😀','😃','😄','😆','😅','😂','🤣']
    let gen = Math.floor(Math.random()*arr.length)
    let h4 = document.querySelector('h4')
    let memes = await fetch('https://icanhazdadjoke.com/', {
        headers :{
            accept : "application/json"
        }
    })
        let jokes = await memes.json()
       h3.innerHTML = jokes.joke
       h4.innerHTML = arr[gen]
    
})
