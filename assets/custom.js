setTimeout(function () {
    document.querySelector('.modal-popup-wrapper').classList.add('modal-popup-shown')
}, 10000);

document.querySelector('.modal-popup-close').addEventListener('click',
    ()=> {
        document.querySelector('.modal-popup-wrapper').classList.remove('modal-popup-shown')
    })

console.log('working');

let menu_item = document.querySelectorAll('.custom-navigation-menu .parent li');


for (let i = 0; i < menu_item.length; i++) {
    menu_item[i].querySelector('.child') && menu_item[i].addEventListener('mouseover', function (){
        menu_item[i].querySelector('.child').style.display='block';
        console.log('he')
    });
    menu_item[i].querySelector('.child') &&
    menu_item[i].addEventListener('mouseleave', function () {
        menu_item[i].querySelector('.child').style.display = 'none';
    });
}

