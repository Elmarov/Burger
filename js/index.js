function slider() {
    const images = document.querySelectorAll('.list__slider img');
    const listSlider = document.querySelector('.list__slider');

    let count = 0;
    let w;


    function init() {
        w = document.querySelector('.burger-slider').offsetWidth;

        listSlider.style.width = w+images.length + 'px';
        images.forEach(item =>{
            item.style.width = w + 'px';
            item.style.height =  'auto';
        })
        rollSlider();

    }

    window.addEventListener('resize',init);

    init();

let rig = document.querySelector('.right-scrol');
    rig.addEventListener('click',function () {
       
        count++;
        rollSlider();
       
        if (count >= images.length) {
            count= 0;
            
        }
    });



  let lef=  document.querySelector('.left-scrol');
  lef.addEventListener('click',function () {
        count--;
        rollSlider();
        if (count < 0) {
            count = images.length - 1;
        }
    });

    function rollSlider() {
        listSlider.style.transform = 'translate(-'+count*w +'px)';
       
    }

   

}

slider();
