$(document).ready(function(){
    alert("This webpage allows you to view multiple news articles on the same event easily and quickly.");

    $("#NYT").on({
        /*mouseenter: function(){
            $(this).css("color", "#dbe9ff");
        },
        mouseleave: function(){
            $(this).css("color", "default");
        },*/
        click: function(){
            $(".FNa").hide();
            $(".NYTa").fadeIn("slow");
            $("body").css({"background-color": "black"});
            $("header").css({"background-color": "#181518", "color": "white", "border-color": "white",});
            $("section").css({"background-color": "#121212", "color": "white",});
            $("nav").css()({"color": "white", "border-color": "white",});
        }
    });

    $("#FN").on({
        /*mouseenter: function(){
            $(this).css("color", "red");
        },
        mouseleave: function(){
            $(this).css("color", "white");
        },*/
        click: function(){
            $(".NYTa").hide();
            $(".FNa").fadeIn("slow");
            $("body").css({"background-color": "#ffdee8"});
            $("header").css({"background-color": "white", "color": "black", "border-color": "black",});
            $("section").css({"background-color": "white", "color": "black",});
            $("nav").css()({"color": "black", "border-color": "black",});
        }
    });
});