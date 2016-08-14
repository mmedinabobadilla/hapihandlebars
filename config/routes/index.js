/*
Aqui se deben agregar las rutas para cada modulo que 
se quiera insertar.
Ejemplo:
   ******************
   routes/unaRuta.js
   ******************
	var hola={
		method:"GET",
		path:"/unaRuta",
		handler:function(request,write){
			write("Una ruta de prueba");
		}
	}
*/
var defecto=[
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
defecto=defecto.concat( require("./unaRuta.js") );
module.exports=defecto;