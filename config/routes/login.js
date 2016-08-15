var Clogin=require("../../controller/login/Login.js");
var login=[
	{
		method:"GET",
		path:"/",
		handler:function(request,write){
			write.view("login");
		}
	},
	{
		method:["POST","GET"],
		path:"/login",
		handler:function(request,write){
			write("un login");
		}
	},
	{
		method:"GET",
		path:"/login/{name}",
		handler:function(request,write){
			write("Saludos "+request.params.name);
		}
	}
];
module.exports=login;