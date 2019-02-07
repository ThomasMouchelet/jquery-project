$(window).on("scroll",function(){
    let positionY = $(this).scrollTop();

    // Afficher arrototop une fois en bas de la page
    if(positionY > 1500){
        $("#scrolltotop").css("opacity", 1);
    }
    if(positionY < 1500){
        $("#scrolltotop").css("opacity", 0);
    }
})