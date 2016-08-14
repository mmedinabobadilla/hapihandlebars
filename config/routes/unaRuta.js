var unaRuta=[
	{
		method:"GET",
		path:"/unaRuta",
		handler:function(request,write){
			write("Hola una Ruta");
		}
	}
];
module.exports=unaRuta;