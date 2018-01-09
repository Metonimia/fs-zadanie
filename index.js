var fs = require('fs');

fs.readdir('./fs-zadanie', function(err, files) {
	console.log(files);
	fs.writeFile('text.txt', files, (err) => {
		if (err) throw err;
		console.log('The file has been saved!');
	});
});