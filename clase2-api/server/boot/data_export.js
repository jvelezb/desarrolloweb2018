module.exports = function(app) {

	app.dataSources.miConexion.automigrate('profesor',function(err){
		 if (err) throw err;
		 app.models.profesor.create([{nombre:'Juan Vélez ñoño'},{nombre:'Giberto'},{nombre:'Jirafales'}],function(err,profesor){
		 	if(err) throw err;
		 		console.log('El modelo de profesor no se creo',profesor);
		 });
	});

	app.dataSources.miConexion.automigrate('materia',function(err){
		 if (err) throw err;
		 app.models.materia.create([{nombre:'web',semestre:'6.0'},{nombre:'Arquitectura',semestre:'8.0'}],function(err,materia){
		 	if(err) throw err;
		 		console.log('El modelo de materia no se creo',materia);
		 });
	});

}