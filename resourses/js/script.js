$(document).ready(function() {

    var url_string = window.location.href;
    var url = new URL(url_string);
    var id = url.searchParams.get("id");
    
    if( (id!=null) && (id!="") ){
        switch(id) {
            case "empresa":
                $("html, body").animate({scrollTop: $(".js--section-company").offset().top}, 3000)
                break;
            case "servicos":
                $("html, body").animate({scrollTop: $(".js--section-services").offset().top}, 3000)
                break;
            case "escritorios":
                $("html, body").animate({scrollTop: $(".js--section-location").offset().top}, 3000)
                break;
            case "cad-pes-fis":
                $("html, body").animate({scrollTop: $(".js--item-cad-pes-fis").offset().top}, 1000)
                break;
            case "cad-logr":
                $("html, body").animate({scrollTop: $(".js--item-cad-logr").offset().top}, 1000)
                break;
            case "cad-imo":
                $("html, body").animate({scrollTop: $(".js--item-cad-imo").offset().top}, 1000)
                break;
            default:
                break;
        }
    }
    
    /* ===X===X===X===X===X===X===X===X===X===X===X===X===X===X===X===X===X===X===X */
    
    $(".js--section-company").waypoint(function(direction) {
        if (direction == "down") {
            $("nav").addClass("sticky");
        } else {
            $("nav").removeClass("sticky");
        }
    }, {
        offset: '60px;'
    });

    
    
    $(".service-container").click(function(){
        location.href = "servicos.html?id="+this.id;
    });
    
    $(".js--scroll-to-home").click(function(){
        location.href = "index.html";
    });
    
    $(".nav-volta").click(function(){
        location.href = "index.html?id="+this.id;
    });
    
    
    
    $(".js--scroll-to-services").click(function(){
        $("html, body").animate({scrollTop: $(".js--section-services").offset().top}, 1000)
    });
    
    $(".js--scroll-to-footer").click(function(){
        $("html, body").animate({scrollTop: $(".js--section-footer").offset().top}, 1500)
    });
    
    $(".js--scroll-to-company").click(function(){
        $("html, body").animate({scrollTop: $(".js--section-company").offset().top}, 1000)
    });
    
    $(".js--scroll-to-top").click(function(){
        $("html, body").animate({scrollTop: $(".js--section-top").offset().top}, 1000)
    });
    
    $(".js--scroll-to-location").click(function(){
        $("html, body").animate({scrollTop: $(".js--section-location").offset().top}, 1000)
    });
    
    
});