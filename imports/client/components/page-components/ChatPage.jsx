import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import FlatButton from 'material-ui/FlatButton';
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
        this.sendMessage = this.sendMessage.bind(this);
    }

    handleTextFieldChange(event, newValue) {
        this.setState({textFieldValue:newValue});
    }

    handleKeyDown({ctrlKey, keyCode}) {
        if(ctrlKey && keyCode === 13) {
           this.sendMessage();
        }
    }

    sendMessage() {
        if(this.state.textFieldValue === '') {
            return;
        }
        Meteor.call('addMessage', this.props.roomNumber, this.state.textFieldValue);
        this.setState({textFieldValue:''});
    }

    render() {
        const roomNumber = this.props.roomNumber;
        return (
            <div className="chat-page">
                <MessageBox roomNumber={roomNumber}/>
                <div style={{display:'flex'}}>
                    <TextField
                        hintText="Write a message..."
                        multiLine={true}
                        rowsMax={4}
                        fullWidth={true}
                        onChange={this.handleTextFieldChange}
                        onKeyDown={this.handleKeyDown}
                        value={this.state.textFieldValue}
                    />
                    <FlatButton
                        label="Send"
                        onTouchTap={this.sendMessage}
                    />
                </div>
            </div>
        );
    }
}

ChatPage.propTypes = {
    roomNumber: PropTypes.string.isRequired
};