var rutas=[
	{
		method:"GET",
		path:"/",
		handler:function(request,write){
			write.view("index");
		}
	},
	{
		method:"GET",
		path:"/assets/{param*}",
		handler:{
			directory:{
				path:"public/assets"
			}
		}
	}
];
module.exports=rutas;