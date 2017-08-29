var fontManager = require('font-manager');
var allFonts = fontManager.getAvailableFontsSync();

function grabFonts() {
	var localFonts = allFonts;
	var fonts = [];
	allFonts.forEach(function(font) {
		// fonts.push({path: font.path, name: font.family, style: font.style})
		fonts.push({name: font.family, path: font.path, style: font.style});
	})
	return fonts;
}

function removeDuplicates(arr, spec) {
	for (var i = 1; i < arr.length; i++) {
		if (arr[i-1].spec == arr[i].spec) {
			arr.splice(i, 1)
		}
	}
	return arr;
}

//console.log(grabFonts())
//console.log(removeDuplicates(grabFonts(), name))
