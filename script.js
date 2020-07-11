$(document).ready(function(){
    var itemcounter = 0;
    $(".pizza1").css('display','none');
    $(".pizza2").css('display','none');
    $(".pizza3").css('display','none');
    $(".menucontent").css('display','none');
    $(".fa.fa-bars").click(function(){
       
        $(".menucontent").toggle();
       
    });
    $(".btnaddtcard").click(function(){
        itemcounter++;
        console.log(itemcounter);
    });
    $(".farmbtn").click(function(){
        $(".pizza2").css('display','block');
    });
    $(".ccbtn").click(function(){
        $(".pizza1").css('display','block');
    })
    $('.margheritabtn').click(function(){
        $(".pizza3").css('display','block');
    })

    $(".btnremovecard").click(function(){
        $(this).closest(".titlendiscrip").css('display','none');;
    })
  });