const textBox = document.getElementById("username")
const btn = document.getElementById("btn")
btn.addEventListener('click',()=>{
    const user = textBox.value
    const xhr =new XMLHttpRequest();
    const url = `https://api.github.com/users/${user}`
    xhr.open('GET',url)
    xhr.onreadystatechange=()=>{
        if(xhr.readyState==4&&xhr.status==200)
        {
            const userData = JSON.parse(xhr.responseText)
            const image = document.createElement('img')
            const id = document.createElement('h2')
            const name1 = document.createElement('h1')
            image.setAttribute('src', userData.avatar_url)
            id.innerHTML = userData.id
            name1.innerHTML = userData.name
            console.log(image);
            console.log(id)
            console.log(name1)
            const container = document.getElementById('output')
            container.appendChild(id)
            container.appendChild(name1)
            container.appendChild(image)
            

        }
    }
    xhr.send()
})