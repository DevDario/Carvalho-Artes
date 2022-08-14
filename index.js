let MenuButton  = document.getElementById('menu-trigger');
let MenuContent = document.getElementById('menu-content');
let CloseMenuButton = document.getElementById('close-menu');


MenuButton.addEventListener('click',()=>{
    CloseMenuButton.style.display='flex';
    MenuButton.style.display='none';
    MenuContent.style.opacity=1;
   
});

CloseMenuButton.addEventListener('click',()=>{
    CloseMenuButton.style.display='none'
    MenuButton.style.display='flex'
    MenuContent.style.opacity=0;
});