let person =[
    {
        pic : 'user-img.jpg',
        name : 'Tori Doi',
        job : 'Engineer',
        review : 'Enim optio voluptas molestias pariatur error, vel saepe cum vero minima culpa dignissimos eius, incidunt eveniet aspernatur perferendis ipsum quod mollitia commodi.'
    },
    {
        pic : 'user-img.jpg',
        name : 'Saurav Bajracharya',
        job : 'Web Developer',
        review : 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim optio voluptas molestias pariatur error, vel saepe cum vero minima culpa dignissimos eius, incidunt eveniet aspernatur perferendis ipsum quod mollitia commodi.'
    },
    {
        pic : 'user-img.jpg',
        name : 'Rob Lucci',
        job : 'Doctor',
        review : 'adipisicing elit. Enim optio voluptas molestias pariatur error, vel saepe cum vero minima culpa dignissimos eius, incidunt eveniet aspernatur perferendis ipsum quod mollitia commodi.'
    }
]
let prev = document.querySelector('#prev')
let next = document.querySelector('#next')
let rand = document.querySelector('#rand') 

let id = 0



document.querySelector('h2').innerHTML = `${person[id].name}`
document.querySelector('img').src = `${person[id].pic}`
document.querySelector('h3').innerHTML = `${person[id].job}`
document.querySelector('p').innerHTML = `${person[id].review}`




let change = () => {
document.querySelector('h2').innerHTML = `${person[id].name}`
document.querySelector('img').src = `${person[id].pic}`
document.querySelector('h3').innerHTML = `${person[id].job}`
document.querySelector('p').innerHTML = `${person[id].review}`
}

rand.addEventListener('click', () => {
    id = Math.floor(Math.random(0)*person.length)
    change();
})

prev.addEventListener('click',() => 
{
    id--
    change();
})



