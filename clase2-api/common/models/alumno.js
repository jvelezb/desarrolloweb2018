	'use strict';

module.exports = function(Alumno) {

	Alumno.validatesNumericalityOf('matricula',{int: true});
	Alumno.validatesLengthOf('nombre', { min: 5 , message: { min: 'debe ser mayor a 5 caracteries'} });

Alumno.saludo = function(msg,cb){
		cb(null,'saludos a la banda del salon en especial a '+msg);		
}
Alumno.remoteMethod('saludo',{
	accepts:{arg:'mensaje',type:'string'},
	returns: {arg:'saludo',type:'string'}
});


};
