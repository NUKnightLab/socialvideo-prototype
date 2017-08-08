import React from 'react';

class AppComponent extends React.Component {
    constructor () {
        this.state = {
            numChildren: 0
        };
    }

    render () {
        const children = [];

        for (var i = 0; i < this.state.numChildren; i += 1) {
            children.push(<ChildComponent number={i} />);
        };

        return (
            <ParentComponent addChild={this.onAddChild.bind(this)}>
                {children}
            </ParentComponent>
        );
    }

    onAddChild () {
        this.setState({
            numChildren: this.state.numChildren + 1
        });
    }
}

class ParentComponent extends React.Component {
    render () {
        return (
            <div className="card calculator">
                <p><a href="#" onClick={this.props.addChild}>Add Another Child Component</a></p>
                <div id="children-pane">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

class ChildComponent extends React.Component {
    render () {
        return (
            <div>{"I am child " + this.props.number}</div>
        );
    }
}