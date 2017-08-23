import React from 'react';
import 'react-widgets/lib/less/react-widgets.less';
import DropdownList from 'react-widgets/lib/DropdownList';
import '../www/index.css';

class FontPreset extends React.Component {
	constructor(props) {
  		super(props);
  		this.state = {
    		value: ''
  		};
	}

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

	render() {
		return (
            <div className="preset">
                <select>
                    {this.showFontOptions()}
                </select>
            </div>
        )
    }
}

export default FontPreset;

// style={setFontStyle + font.name}

// <DropdownList
//             data= {grabFonts()}
//             //value={this.state.value}
//             onChange={value => this.setState({ value })}/>
//           </div>