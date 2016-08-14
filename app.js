'use strict';
const Hapi=require("hapi");
const Path=require("path");
const Hoek=require("hoek");
const rutas=require("./config/routes/index.js");
const Moment=require("moment-timezone");
const server=new Hapi.Server();
const web=server.connection({
	port:3000,
	host:"localhost"
});

server.register(
	[require("vision"),require("inert")],
	(er)=>{
		Hoek.assert(!er,er);
		server.views({
			engines:{
				html:require("handlebars")
			},
			relativeTo:__dirname,
			path:"./public",
			layoutPath:"./public/layout",
			helpersPath:"./public/helpers"
		});
		server.route(rutas);
	}
);
server.start(
	(er)=>{
		if(er) throw er;
		console.log("Servidor Corriendo "+server.info.uri);
		var date=Moment().tz("America/Santiago").format("YYYY-MM-DD HH:MM:SS");
		console.log(date);
	}
);