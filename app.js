$(document).ready(function () {
    $(".sibling1 h2").siblings().css({
        "color": 'red',
        "background": 'yellow'
    });

    $(".sibling2 p").siblings('span').css({
        "color": '#fff',
        "background": '#222',
        "font-size": '20px'
    });
    $(".sibling3 span").siblings('h3').css({
        "color": 'red',
        "background": '#fff',
        "font-size": '20px',
        "border": '2px solid black'
    });
    $(".sibling4 h2").next().css({
        "color": 'yellow',
        "background": 'darkblue',
        "font-size": '25px',
        "border": '2px solid yellow',
        "padding": '0 10px'
    });

    $(".sibling5 span").nextUntil('h3').css({
        "color": 'yellow',
        "background": 'darkblue',
        "font-size": '25px',
        "border": '2px solid yellow',
        "padding": '0 10px'
    });

    $(".sibling6 h2").nextAll().css({
        "color": 'yellow',
        "background": 'darkred',
        "font-size": '25px',
        "border": '2px solid yellow',
        "padding": '0 10px'
    });
    $(".sibling7 h2").prev().css({
        "color": '#222',
        "background": 'yellow',
        "font-size": '25px',
        "border": '2px solid #222',
        "padding": '0 10px'
    });

    $(".sibling8 p").prevUntil().css({
        "color": '#222',
        "background": 'yellow',
        "font-size": '25px',
        "border": '2px solid #222',
        "padding": '0 10px'
    });

    $(".sibling9 h2").prevAll().css({
        "color": 'red',
        "background": 'yellow',
        "font-size": '25px',
        "border": '2px solid #222',
        "padding": '0 10px'
    });

    $(".btn").click(function () {
        $(".btn-text").toggle("slow", function () {
            alert("Hello EveryOne");
        });
    });

    $(".btn1").click(function () {
        $(".chaining-text").css('background', 'orange')
            .slideUp(2000)
            .slideDown(2000)
            .hide(2000)
    });
    
   $(".ajax-btn").click(function(){
       $(".ajax").load("demo.html")
   }); 
    
    
});
