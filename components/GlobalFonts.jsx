import React from 'react';
import 'react-widgets/lib/less/react-widgets.less';
import DropdownList from 'react-widgets/lib/DropdownList';
import '../www/index.css';

class FontPreset extends React.Component {

    showFontOptions() {
        var systemFonts = grabFonts();
        systemFonts = systemFonts.sort(function(a, b) {
            let fontA = a.name.toUpperCase();
            let fontB = b.name.toUpperCase();
            return (fontA < fontB) ? -1 : (fontA > fontB) ? 1 : 0;
        });
        const fontList = systemFonts.map((font, index) =>
            <option value={font.path} key={index}> {font.name} </option>
        );
        return fontList;
    }

    //unutilized function that should work on an alphabetized
    //list to remove duplicates
    removeDuplicates(arr, spec) {
        for (var i = 1; i < arr.length; i++) {
            if (arr[i-1].spec === arr[i].spec) {
                arr.splice(i, 1)
            }
        }
        return arr;
    }

    recordSelectedFont() {
        var globalPresets = this.props.globalPresets;
        var fs = document.getElementById('font-selector');
        var fspath = fs.options[fs.selectedIndex].value;
        globalPresets.font = fspath;
        this.props.updateGlobal(globalPresets);
        console.log(fspath);
    }

	render() {
		return (
            <div className="preset">
                <select id="font-selector"
                onChange={this.recordSelectedFont.bind(this)}
                >
                    {this.showFontOptions()}
                </select>
            </div>
        )
    }
}

export default FontPreset;
//
//onChange={this.recordSelectedFont.bind(this)}







// style={setFontStyle + font.name}
//onChange={this.recordSelectedFont()}

//onChange={this.recordSelectedFont()}
//onChange={this.recordSelectedFont('font-selector')}
// <DropdownList
//             data= {grabFonts()}
//             //value={this.state.value}
//             onChange={value => this.setState({ value })}/>
//           </div>