// ready document
$(document).ready(() => {


    $(".next").click(() => { 
        if( $(".slider img.active").is(":last-of-type"))
            $(".slider img:first-of-type").addClass("active").siblings().removeClass("active");
        else
        $(".slider img.active").removeClass("active").next().addClass("active");
        });
    
      
      
    $(".previous").click(() => { 
        if( $(".slider img.active").is(":first-of-type"))
            $(".slider img:last-of-type").addClass("active").siblings().removeClass("active");
        else
        $(".slider img.active").removeClass("active").prev().addClass("active");
    
    });
    
       
    
    });

    