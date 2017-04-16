import AppBar from 'material-ui/AppBar';
import React, { Component } from 'react';
import { PropTypes } from 'react';
import GroupIcon from 'material-ui/svg-icons/social/group';

export default class AppLayout extends Component {

    constructor(props) {
        super(props);

        this.state = {
            appName: 'Chat App'
        };
    }


    render() {
        return (
            <AppBar
                title={this.props.title || this.state.appName}
                titleStyle={{display: 'flex', justifyContent: 'center'}}
                iconElementRight={(<GroupIcon className="icon-right-style" color="#fff"/>)}/>
        );
    }
}

AppLayout.propTypes = {
    title: PropTypes.string
};