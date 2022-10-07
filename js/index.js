function slider() {
    const images = document.querySelectorAll('.list__slider img');
    const listSlider = document.querySelector('.list__slider');

    let count = 0;
    let w;


    function init() {
        w = document.querySelector('.burger-slider').offsetWidth;

        listSlider.style.width = w + images.length + 'px';
        images.forEach(item => {
            item.style.width = w + 'px';
            item.style.height = 'auto';
        })
        rollSlider();

    }

    window.addEventListener('resize', init);

    init();

    let rig = document.querySelector('.right-scrol');
    rig.addEventListener('click', function () {

        count++;
        rollSlider();

        if (count >= images.length) {
            count = 0;

        }
    });



    let lef = document.querySelector('.left-scrol');
    lef.addEventListener('click', function () {
        count--;
        rollSlider();
        if (count < 0) {
            count = images.length - 1;
        }
    });

    function rollSlider() {
        listSlider.style.transform = 'translate(-' + count * w + 'px)';

    }



}

slider();

// ======================= four        ===================

function four() {

    let activ = document.querySelector('.item__coment--activ');
    let item = document.querySelectorAll('.item__coment');
    let link = document.querySelectorAll('.item__coment-link');

    let list = document.querySelector('.list__coment');

    // list.addEventListener('click', function (event) {




    // event.preventDefault();

    // $(link).parents().classList.toggle('.item__coment--activ');

    // const target = event.target;

    // console.log(target);





    // target.parents().classList.toggle('item__coment--activ');

    // console.log('link3');

    // })

    for (let i = 0; i < item.length; i++) {
        const element = item[i];

        element.addEventListener('click', function (event) {
            event.preventDefault();

            const target = event.target;

            element.classList.toggle('item__coment--activ')

            console.log(element)

        }, true)

    }

}

four();



// =======================                ===================








// ==========section__four ================




// =================== overlay ========================

let modal = document.querySelector('.form .block-btn .order-link');

modal.addEventListener('click', function (e) {

    let bo = document.body;
    let el1 = document.createElement('div');
    bo.appendChild(el1);
    el1.classList.add('mod');

    let el2 = document.createElement('div');
    el1.appendChild(el2);
    el2.classList.add('mod-content');

    el2.innerText = 'Сообщение отправлено';


    let b3 = document.createElement('button');
    el2.appendChild(b3);
    b3.classList.add('closs');
    b3.innerText = 'X';



    b3.addEventListener('click', function () {


        bo.removeChild(el1);



    })



});

