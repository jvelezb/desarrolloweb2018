'use strict';

module.exports = function(Producto) {

	Producto.saludo = function(msg,cb){
		var variable = null;
		cb(variable,'saludos a la banda del salon en especial a '+msg);		
}
Producto.remoteMethod('saludo',{
	accepts:{arg:'mensaje',type:'string'},
	returns: {arg:'saludo',type:'string'}
});

};
