const menuList = document.getElementById('menuList');
const menu = document.getElementById('menu');

    menu.addEventListener('click', ()=>{
        menuList.classList.toggle('-translate-x-full')

    })
    

// const circles = document.querySelectorAll('#circles');
// const cards = document.querySelectorAll('#cards');

// circles.forEach( circle =>{
//     circle.addEventListener('click', ()=>{
//         cards.forEach( card =>{
//             card.addEventListener('click', ()=>{
//                 card.style.Zindex = 9999;
//             })
//         })
//         })
//     })
