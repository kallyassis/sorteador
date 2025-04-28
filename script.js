const luck = document.querySelector('.btn-sortear')

function sortear() {
    const min = Math.ceil(document.querySelector('.input-min').value) 
    const max = Math.floor(document.querySelector('.input-max').value)
    const ul = document.querySelector('.resultado-lista')

    const result =  Math.floor(Math.random() * (max - min + 1) + min);
    
    const li = document.createElement('li')

    li.textContent = result

    ul.appendChild(li);
}