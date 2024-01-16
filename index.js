const button = document.getElementById('button')
button.addEventListener('click', () => {
    const date = document.getElementById('date').value;
    const price = document.getElementById('price').value;
    const description = document.getElementById('description').value;
    const time = document.getElementById('time').value;
    console.log(date)
    console.log(price)
    console.log(description)
    console.log(time)
    console.log(`this was a product recover of ${price}`)
})