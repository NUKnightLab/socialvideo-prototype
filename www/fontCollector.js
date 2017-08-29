var fontManager = require('font-manager');

function grabFonts(cb) {
	fontManager.getAvailableFonts(function(allFonts) {
		var fonts = [];
		allFonts.forEach(function(font) {
			// fonts.push({path: font.path, name: font.family, style: font.style})
			fonts.push({name: font.family, path: font.path, style: font.style});
		})
		cb(fonts);
	});
}

//console.log(grabFonts())
//console.log(removeDuplicates(grabFonts(), name))
