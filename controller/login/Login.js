var Login=function(write,valor){
	var con=require("./../../config/database.js");
	write(con.postgres.hostname+"\n");
}
Login.prototype.sumar=function(a,b){
	return a+b;
};
module.exports=Login;