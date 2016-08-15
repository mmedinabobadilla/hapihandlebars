var defecto=[
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
defecto=defecto.concat( require("./login.js") );
module.exports=defecto;