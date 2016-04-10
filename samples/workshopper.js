module.exports = function () {
	var someExport = {
		myFunction: myFunction
	};

	return someExport;

	function myFunction() {
		Workshopper({
			name: 'functional-javascript',
			appDir: __dirname,
			languages: ['en', 'fr', 'ko']
		});
	}

}
