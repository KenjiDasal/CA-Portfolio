$(document).ready(function() {
    // NAVBAR SCROLLING, BACKGROUND CHANGE
    $(window).scroll(function() {
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky"); 
        }
    })

    // NAVBAR MENU CHANGE WHEN ITS PHONE
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

});