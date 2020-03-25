$("h1").text()
$("li").text("kitkat,gems,mars");
$("ul").html();
$("ul").html("<li>Hello</li><li>there</li>");
$("img").attr("src","ask.jpg");
// $("input").attr("type","text");
// $("img:first-of-type").attr("src","ask.jpg");
$("h1").addClass("correct");
// $("h1").removeClass("correct");
$("li").addClass("wrong")
$("li").toggleClass("wrong")

// $("h1").click(function(){
//     alert("h1 clickd");
// })

$("h1").on("click",function(){
    $(this).css("color","purple");
});

// $("button").click(function(){
//     $(this).css("background","pink");
//     var text= $(this).text();
//     console.log("You clicked "+text);
// })

// $("input").keypress(function(event)
// {
//     if(event.which === 13)
//     {
//         alert("You just  xpressed enter");
//     }
// });

$("input").on("keypress",function(){
    console.log("abc");
});

// $("button").on("mouseenter",function(){
//     $(this).css("font-weight","bold");
// });
// $("button").on("mouseleave",function(){
//     $(this).css("font-weight","normal");
// });



$("button").on("click",function(){
    $("div").fadeOut(1000, function()
    {
        console.log("Faded");
        $(this).remove();
    });
    // console.log("faded") inside function so that it gets executed after 1000ms
    // fadeIn
    // fadeToggle
    // slideDown
    // slideUp
    // slideToggle
});