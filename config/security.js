var crypto=require("crypto");
var Security=function(){
	this.encrypter_md5=function(txt){
		return crypto.createHash("md5").update(txt).digest("hex");
	};
}
module.exports=Security;