import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { PropTypes } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
import LoginPage from '../page-components/LoginPage';
injectTapEventPlugin();

export default class AppLayout extends Component {

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <MuiThemeProvider>
                <div>
                    <div>
                        <header>
                            {this.props.appHeader}
                        </header>
                    </div>
                    <div className="app-body">
                        <main>{this.props.body}</main>
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
}

AppLayout.propTypes = {
    headerTitle: PropTypes.string,
    body: PropTypes.node.isRequired,
    appHeader: PropTypes.node.isRequired
};