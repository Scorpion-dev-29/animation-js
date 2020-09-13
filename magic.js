$(document).ready(function () {

    // varriable 
    $surface = $('.surface');
    $car = $('.car');
    $img = $('.car img');
    let flag = true;

    const cars = ['./assets/Img_05.png', './assets/Img_06.png']

    $(document).on('keypress', function (e) {
        if (e.which == 13) {
            $($surface).toggleClass('moveRt');
            $($car).toggleClass('suspension');
            // console.log(e.which)
        }
    })

    $(document).on('keypress', function (e) {
        if (e.which == 119) {
            if (flag) {
                flag = false;
                $img.attr('src', cars[1]);
            }
            else {
                flag = true;
                $img.attr('src', cars[0]);
            }
        }
    })



});



