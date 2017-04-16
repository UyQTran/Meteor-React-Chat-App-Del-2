import React, { Component } from 'react';
import { PropTypes } from 'react';
import Drawer from 'material-ui/Drawer';
import {Toolbar, ToolbarTitle} from 'material-ui/Toolbar';
import MenuItem from 'material-ui/MenuItem';


export default class AppLeftDrawer extends Component {

    constructor(props) {
        super(props);

        this.state = {
        };
    }


    render() {
        return (
            <div>
                <Drawer
                    docked={false}
                    width={200}
                    open={this.props.open}
                    onRequestChange={this.props.onRequestChange}>
                    <Toolbar>
                        <ToolbarTitle
                            text="Uy Tran"
                        />
                    </Toolbar>
                    <div className="right-drawer-items">
                        <img className="profile-picture"
                             src="http://heim.ifi.uio.no/uqtran/Applitude/Chat-app/profile.jpg"
                        />
                        <MenuItem>Item 1</MenuItem>
                        <MenuItem>Item 2</MenuItem>
                    </div>
                </Drawer>
            </div>);
    }
}

AppLeftDrawer.propTypes = {
    open: PropTypes.bool.isRequired,
    onRequestChange: PropTypes.func.isRequired
};