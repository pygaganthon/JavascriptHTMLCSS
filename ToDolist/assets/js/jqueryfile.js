$("ul").on("click","li",function(){
	$(this).toggleClass("completed");

}); 

//click X to delete Todos by fading out
$("ul").on("click","span",function(event){
	event.stopPropagation();
		$(this).parent().fadeOut(500,function(){
			$(this).remove();
		});
});

$("input[type='text']").keypress(function(event){
	if(event.which==13){
		 var inp = $(this).val(); 
		 $(this).val("");
		 $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span>" + " " + inp + "</li>");
	}
});

$("#plusbutton").click(function(){
	$("input[type='text']").fadeToggle();
});

// $("li").on("click",function(){
// 	if($(this).css("color")==="rgb(128, 128, 128)"){
// 		$(this).css({
// 			color:"black",
// 			textDecoration:"none"
// 			});

// 	} 
// 	else
// 	{
// 			$(this).css(
// 		{
// 			color: "gray",
// 			// property name always camel case
// 			textDecoration: "line-through"
// 		}
// 		               );
//     }

// }); 
