$(document).ready(function(){
	$("#btnLogin").on("click",function(){
		var rut=$("#rut").prop("value");
		var pass=$("#pass").prop("value");
		$.ajax({
			url:"/login",
			type:"post",
			data:{rut:rut,pass:pass},
			success:function(e){
				alert(e);
			}
		});
	});
	
});