import AppBar from 'material-ui/AppBar';
import React, { Component } from 'react';
import { PropTypes } from 'react';
import GroupIcon from 'material-ui/svg-icons/social/group';
import AppLeftDrawer from './AppLeftDrawer.jsx';


export default class AppHeader extends Component {

    constructor(props) {
        super(props);

        this.state = {
            title: this.props.title || 'Chat App',
            leftDrawerOpen: false
        };

        this.handleLeftButton = this.handleLeftButton.bind(this);
        this.handleDrawerToggle = this.handleDrawerToggle.bind(this);
    }

    handleLeftButton() {
        this.setState({leftDrawerOpen:true});
    }

    handleDrawerToggle(open) {
        this.setState({leftDrawerOpen:open});
    }


    render() {
        return (
            <div>
                <AppLeftDrawer
                    open={this.state.leftDrawerOpen}
                    onRequestChange={this.handleDrawerToggle}
                />
                <AppBar
                    title={this.state.title}
                    titleStyle={{display: 'flex', justifyContent: 'center'}}
                    iconElementRight={(<GroupIcon className="icon-right-style" color="#fff"/>)}
                    onLeftIconButtonTouchTap={this.handleLeftButton}
                />
            </div>);
    }
}

AppHeader.propTypes = {
    title: PropTypes.string
};