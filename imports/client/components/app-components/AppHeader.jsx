import AppBar from 'material-ui/AppBar';
import React, { Component } from 'react';
import { PropTypes } from 'react';
import GroupIcon from 'material-ui/svg-icons/social/group';
import ArrowBackIcon from 'material-ui/svg-icons/navigation/arrow-back';
import IconButton from 'material-ui/IconButton';
import AppRightDrawer from './AppRightDrawer.jsx';


export default class AppHeader extends Component {

    constructor(props) {
        super(props);

        this.state = {
            title: this.props.title || 'Chat App',
            rightDrawerOpen: false
        };

        this.handleRightButton = this.handleRightButton.bind(this);
        this.handleLeftButton = this.handleLeftButton.bind(this);
        this.handleDrawerToggle = this.handleDrawerToggle.bind(this);
    }

    handleRightButton() {
        this.setState({rightDrawerOpen:true});
    }

    handleLeftButton() {
        window.history.back();
    }

    handleDrawerToggle(open) {
        this.setState({rightDrawerOpen:open});
    }


    render() {
        return (
            <div>
                <AppRightDrawer
                    open={this.state.rightDrawerOpen}
                    onRequestChange={this.handleDrawerToggle}
                />
                <AppBar
                    title={this.state.title}
                    titleStyle={{display: 'flex', justifyContent: 'center'}}
                    iconElementRight={(this.props.showRightButton ? (
                    <IconButton
                        className="icon-right-style"
                        onTouchTap={this.handleRightButton}
                    >
                        <GroupIcon color="#fff"/>
                    </IconButton>
                        ) : (<div style={{width:'48px'}}></div>)
                    )}
                    iconElementLeft={(this.props.showLeftButton ? (
                        <IconButton
                            className="icon-right-style"
                            onTouchTap={this.handleLeftButton}
                        >
                            <ArrowBackIcon color="#fff"/>
                        </IconButton>
                        ) : (<div style={{width:'48px'}}></div>)
                    )}
                />
            </div>);
    }
}

AppHeader.propTypes = {
    title: PropTypes.string,
    showLeftButton: PropTypes.bool.isRequired,
    showRightButton: PropTypes.bool.isRequired
};