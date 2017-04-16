import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import { PropTypes } from 'react';
import MessageBox from "./MessageBox";

export default class ChatPage extends Component {


    constructor(props) {
        super(props);

        this.state = {
            textFieldValue: ''
        };

        this.handleTextFieldChange = this.handleTextFieldChange.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }

    handleTextFieldChange(event, newValue) {
        this.setState({textFieldValue:newValue});
    }

    handleKeyDown({ctrlKey, keyCode}) {
        if(ctrlKey && keyCode === 13) {
            Meteor.call('addMessage', this.props.roomNumber, this.state.textFieldValue);
            this.setState({textFieldValue:''});
        }
    }

    render() {
        const headerText = 'Romnummer: ';
        const roomNumber = this.props.roomNumber;
        return (
            <div className="landing-page">
                {headerText+roomNumber}
                <MessageBox roomNumber={roomNumber}/>
                <TextField
                    hintText="Write a message..."
                    multiLine={true}
                    rowsMax={4}
                    fullWidth={true}
                    onChange={this.handleTextFieldChange}
                    onKeyDown={this.handleKeyDown}
                    value={this.state.textFieldValue}
                />
            </div>
        );
    }
}

ChatPage.propTypes = {
    roomNumber: PropTypes.string.isRequired
};