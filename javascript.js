// show menu mobile and overlay
$(document).ready(function() {
    $(".button-menu-mobile").click(function() {
        $('.menu-mobile').css('transform', 'translate(0%)');
        $('.overlay-mobile').css('display', 'block');
    });
});
// hidden menu mobile by close icon
$(document).ready(function() {
    $("#closeicon").click(function() {
        $('.menu-mobile').css('transform', 'translate(100%)');
        $('.overlay-mobile').css('display', 'none'); // hidden overlay
        $(".sub-menu-mobile").css('display', 'none'); // hidden child menu
        $('.show-border').css('border-bottom', 'none'); // hidden border bottom of "li"
        $(".menu-item-mobile").css('border-bottom', '1px solid #EEEEEE');
        $('#intro-mobile').css('border-bottom', '1px solid #EEEEEE');
    });
});
// hidden menu mobile by overlay
$(document).ready(function() {
    $(".overlay-mobile").click(function() {
        $('.menu-mobile').css('transform', 'translate(100%)');
        $('.overlay-mobile').css('display', 'none');

    });
});

$(document).ready(function() {
    $(".menu-item-mobile").click(function() {
        // $(".sub-menu-mobile").css('display', 'block');
        $(".menu-item-mobile").css('border-bottom', 'none');
        $('.show-border').css('border-bottom', '1px solid #EEEEEE');
        $('#intro-mobile').css('border-bottom', 'none');
    })
})

document.getElementById('child-1').onclick = showThis1;

function showThis1() {
    document.getElementById('menuchild-1').style.display = "block";
    document.getElementById('menuchild-2').style.display = "none";
    document.getElementById('menuchild-3').style.display = "none";
    document.getElementById('menuchild-4').style.display = "none";
    document.getElementById('menuchild-5').style.display = "none";
}

document.getElementById('child-2').onclick = showThis2;

function showThis2() {
    document.getElementById('menuchild-1').style.display = "none";
    document.getElementById('menuchild-2').style.display = "block";
    document.getElementById('menuchild-3').style.display = "none";
    document.getElementById('menuchild-4').style.display = "none";
    document.getElementById('menuchild-5').style.display = "none";
}

document.getElementById('child-3').onclick = showThis3;

function showThis3() {

    document.getElementById('menuchild-1').style.display = "none";
    document.getElementById('menuchild-2').style.display = "none";
    document.getElementById('menuchild-3').style.display = "block";;
    document.getElementById('menuchild-4').style.display = "none";
    document.getElementById('menuchild-5').style.display = "none";
}

document.getElementById('child-4').onclick = showThis4;

function showThis4() {
    document.getElementById('menuchild-1').style.display = "none";
    document.getElementById('menuchild-2').style.display = "none";
    document.getElementById('menuchild-3').style.display = "none";;
    document.getElementById('menuchild-4').style.display = "block";
    document.getElementById('menuchild-5').style.display = "none";

}

document.getElementById('child-5').onclick = showThis5;

function showThis5() {
    document.getElementById('menuchild-1').style.display = "none";
    document.getElementById('menuchild-2').style.display = "none";
    document.getElementById('menuchild-3').style.display = "none";;
    document.getElementById('menuchild-4').style.display = "none";
    document.getElementById('menuchild-5').style.display = "block";
}

$(document).ready(function() {
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        autoplay: true,
        autoplayTimeout: 3000,
        loop: true,
        margin: 10,
        nav: false,
        items: 5,
        responsiveClass: true,
        responsive: {
            0: {
                items: 2,
            },
            375: {
                items: 3,
            },
            1340: {
                items: 5,
            }
        }
    });

    // Custom Button
    $('.customNextBtn').click(function() {
        owl.trigger('next.owl.carousel');
    });
    $('.customPreviousBtn').click(function() {
        owl.trigger('prev.owl.carousel');
    });

});


// ajax jordan details
function getData() {
    $.ajax({
        url: "https://api.jsonbin.io/b/5f3b62f9b88c04101cf62c5a/latest",
        method: "GET",
        headers: {
            "secret-key": "$2b$10$FylrR.yMvOFqIRfe2p8uGOkHAT19.v3Ex2bZBz9feDPpFyEcKSULO"
        },
        success: function(res) {
            renderData(res);
        },
        error: function(err) {
            console.log(err);
        }
    })
}

function renderData(data) {
    var html = '';

    for (var i = 0; i < data.length; i++) {
        html +=
            '<div class="box-shoes">' +
            '<div class="shoes-picture">' +
            '<img src=' + data[i].img_url + ' alt="">' +
            '</div>' +
            '<div class="shoes-content">' +
            '<a class="ps-shoe__name" href="detail-airjordan.html?id=' + data[i].id + '">' + data[i].name + '</a>' +
            '<span class="ps-shoe__price">' + data[i].price + '</span>' +
            '</div>' +
            '</div>'
    }
    $('.left-list-jordan').html(html);
}


$('.owl-dot').click(function() {
    owl1.trigger('to.owl.carousel', [$(this).index(), 1000]);
})
$(document).ready(function() {
    $('.NextBtn').click(function() {
        owl.trigger('next.owl.carousel');
    });
    $('.PreviousBtn').click(function() {
        owl.trigger('prev.owl.carousel');
    });
});

// tăng giảm Số lượng mua hàng
var count = 0;
var counter = document.getElementById('value');
// counter.innerHTML = count;
function sub() {
    var temp = document.getElementById('value');
    if (count > 1) count--;
    temp.innerHTML = count;
}

function sum() {
    var temp = document.getElementById('value');
    count++;
    temp.innerHTML = count;
}

//button back to top
var btn = $('#btn-backtotop');

$(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
});

btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, '300');
});