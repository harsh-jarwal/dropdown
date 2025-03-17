$(".head").on("click", function(){
    $(".desc").slideUp();
    if($(this).next().is(":hidden")) {
        $(this).next().slideDown();
    }else {
        $(this).next().slideUp();
    }
});
$(".subhead").on("click",function(){
    $(".about").hide();
    $(this).next().show();
    $(".subhead").removeClass("active");
    $(this).addClass("active");
});
$(".companynames li").on("click",function(){

    $(".companynames li").removeClass("active");
    $(this).addClass("active");
    
    
    $(".models li").removeClass("show");
    $(".models li").eq($(this).index()).addClass("show");

})

// $(".subhead").on("click",function(){
//     // $('.about').removeclass("active");
//     // $(this).next().addclass("active");
//     $(".about").removeclass("show");
//     $(".about").addclass("show");
    
// })