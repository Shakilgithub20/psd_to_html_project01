$(document).ready(function(){
    //sticky menu
    $(".js--services-section").waypoint(function(direction){
        if(direction == "down"){
            $("nav").addClass("sticky");
        }else{
            $("nav").removeClass("sticky");
        }
    });


    //mixit-up
    var mixer = mixitup('.container');
});