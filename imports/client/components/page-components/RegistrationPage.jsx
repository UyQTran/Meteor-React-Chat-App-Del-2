import React, { Component } from 'react';
import {FlowRouter} from 'meteor/kadira:flow-router';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
import { PropTypes } from 'react';
import { Accounts } from 'meteor/accounts-base';

export default class RegistrationPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            confirmPassword: ''
        };


        this.handleUsernameTextFieldChange = this.handleUsernameTextFieldChange.bind(this);
        this.handlePasswordTextFieldChange = this.handlePasswordTextFieldChange.bind(this);
        this.handleConfirmPasswordTextFieldChange = this.handleConfirmPasswordTextFieldChange.bind(this);
        this.handleRegister = this.handleRegister.bind(this);
    }

    handleUsernameTextFieldChange(event, newValue) {
        this.setState({username: newValue});
    }

    handlePasswordTextFieldChange(event, newValue) {
        this.setState({password: newValue});
    }

    handleConfirmPasswordTextFieldChange(event, newValue) {
        this.setState({confirmPassword: newValue});
    }

    handleRegister() {

        Accounts.createUser(
            {
                email: this.state.username,
                password: this.state.password
            },
            (error)=>{
                if (error) {
                    console.log("there was an error: " + error.reason);
                } else {
                    FlowRouter.go('rootview');
                };
            });
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
                <TextField
                    floatingLabelText="Confirm Password"
                    onChange={this.handleConfirmPasswordTextFieldChange}
                    type="password"
                    value={this.state.confirmPassword}
                />
                <FlatButton
                    label="Register"
                    onTouchTap={this.handleRegister}
                />
            </div>);
    }
}