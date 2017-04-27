import React, { Component } from 'react';
import {FlowRouter} from 'meteor/kadira:flow-router';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import { PropTypes } from 'react';

export default class LoginPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: ''
        };


        this.handleUsernameTextFieldChange = this.handleUsernameTextFieldChange.bind(this);
        this.handlePasswordTextFieldChange = this.handlePasswordTextFieldChange.bind(this);
        this.handleSignIn = this.handleSignIn.bind(this);
    }

    handleUsernameTextFieldChange(event, newValue) {
        this.setState({username: newValue});
    }

    handlePasswordTextFieldChange(event, newValue) {
        this.setState({password: newValue});
    }

    handleSignIn() {
        Meteor.loginWithPassword(this.state.username, this.state.password, function(error) {
            if (error) {
                console.log("There was an error:" + error.reason);
            } else {
                FlowRouter.go('/landing-page');
            }
        });
    }

    handleRegister() {
        FlowRouter.go('register');
    }

    render() {
        return (
            <div className="landing-page">
                <TextField
                    floatingLabelText="Username"
                    onChange={this.handleUsernameTextFieldChange}
                    value={this.state.username}
                />
                <TextField
                    floatingLabelText="Password"
                    onChange={this.handlePasswordTextFieldChange}
                    type="password"
                    value={this.state.password}
                />
                <FlatButton
                    label="Sign in"
                    onTouchTap={this.handleSignIn}
                />
                <FlatButton
                    label="New User"
                    onTouchTap={this.handleRegister}
                />
            </div>);
    }
}

LoginPage.propTypes = {
    onSubmit: PropTypes.func.isRequired
};