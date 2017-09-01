import React from 'react';
import 'react-widgets/lib/less/react-widgets.less';
import DropdownList from 'react-widgets/lib/DropdownList';
import '../../www/styles.css';
import './FontPreset.css';


class FontPreset extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fonts: []
        }
        //console.log('FontPreset constructor')
    }

    showFontOptions(systemFonts) {
        systemFonts = systemFonts.sort(function(a, b) {
            let fontA = a.name.toUpperCase();
            let fontB = b.name.toUpperCase();
            return (fontA < fontB) ? -1 : (fontA > fontB) ? 1 : 0;
        });
        const fontList = systemFonts.map((font, index) =>
            <option value={font.path} key={index}> {font.name} – {font.style} </option>
        );
        // instead of fontList, that JSX should be in render...
        this.setState({fonts: fontList})
    }

    recordSelectedFont() {
        var globalPresets = this.props.globalPresets;
        var fs = document.getElementById('font-selector');
        var fspath = fs.options[fs.selectedIndex].value;
        globalPresets.font = fspath;
        this.props.updateGlobal(globalPresets);
        console.log(fspath);
    }

    componentDidMount() {
        var self = this;
        grabFonts(function(fonts) { self.showFontOptions(fonts); })
        console.log('FontPreset component mounted')
        // this.setState({ fonts: this.showFontOptions() })
    }

	render() {
        console.log('FontPreset render')
		return (
            <div className="preset">
                <select id="font-selector"
                    onChange={this.recordSelectedFont.bind(this)}
                >
                    {this.state.fonts}
                </select>
            </div>
        )
    }
}

export default FontPreset;