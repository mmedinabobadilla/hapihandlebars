var Postgresql=function(conexion){

	this.doSql=function(sql,array,funcion){
		var pg=require("pg");
		var conString="postgres://"+conexion.postgres.user+":"+conexion.postgres.pass+"@"+conexion.postgres.host+":"+conexion.postgres.port+"/"+conexion.postgres.database;
		var client=new pg.Client(conString);
		client.connect();
		var query=client.query(sql,array);
		query.on("row",function(row,result){
			result.addRow(row);
		});
		query.on("end",function(result){
			funcion(result);
		});

	};

}
module.exports=Postgresql;