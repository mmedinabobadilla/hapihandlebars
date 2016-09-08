var Login=function(write,valor){
	var Postgres=require("./../../config/Connection.js");
	var crypto=require("crypto");
	var con=new Postgres(require("./../../config/database.js"));
	con.doSql("select * from patient where rut=$1",["12.312.312-3"],function(result){
		write(result.rows[0].name);
	});
}
Login.prototype.sumar=function(a,b){
	return a+b;
};
module.exports=Login;