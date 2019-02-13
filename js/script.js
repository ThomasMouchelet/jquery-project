$(window).on("scroll",function(){
    let positionY = $(this).scrollTop();

    // Afficher arrototop une fois en bas de la page
    if(positionY > 1500){
        $("#scrolltotop").css("opacity", 1);
    }
    if(positionY < 1500){
        $("#scrolltotop").css("opacity", 0);
    }
    // lorsque positionY est supérieur à 100
    if(positionY > 100){
        // réduire height de la nav 
        $(".nav-bar").addClass("sup100");
    }
    if(positionY < 100){
        $(".nav-bar").removeClass("sup100");
    }
    // positionner la nav en fixe en haut de la page
})

