var fontManager = require('font-manager');
var allFonts = fontManager.getAvailableFontsSync();

function grabFonts() {
	var localFonts = allFonts;
	var fonts = [];
	allFonts.forEach(function(font) {
		fonts.push({path: font.path, name: font.family, style: font.style})
	})
	return fonts;
}

console.log(grabFonts())
