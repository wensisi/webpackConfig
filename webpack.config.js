const path = require('path');
module.exports = {
	entry:'./maim.js',
	output:{
		filename:'bunlde.js',
		path:path.join(__dirname,'./dist')
	},
	mode:"production"

}