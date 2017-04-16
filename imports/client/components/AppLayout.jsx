import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { PropTypes } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

export default class AppLayout extends Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div>
                <MuiThemeProvider>
                    <div className="app-body">
                        <header>{this.props.header}</header>
                        <main>{this.props.body}</main>
                    </div>
                </MuiThemeProvider>
            </div>
        );
    }
}

AppLayout.propTypes = {
    header: PropTypes.node.isRequired,
    body: PropTypes.node.isRequired
};