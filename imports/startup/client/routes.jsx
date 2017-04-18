import {FlowRouter} from 'meteor/kadira:flow-router';
import AppLayout from '../../client/components/app-components/AppLayout.jsx';
import {mount} from 'react-mounter';
import React from 'react';
import LandingPage from '../../client/components/page-components/LandingPage.jsx';
import ChatPage from '/imports/client/components/page-components/ChatPage.jsx';
import JoinPage from '/imports/client/components/page-components/JoinPage.jsx';
import LoginPage from "../../client/components/page-components/LoginPage";
import AppHeader from "../../client/components/app-components/AppHeader";

FlowRouter.route('/', {
    name: 'rootview',
    action(props) {
        mount(AppLayout, {
            appHeader: (<AppHeader
                showRightButton={false}
                showLeftButton={false}
            />),
            body: (<LoginPage/>)
        });
    }
});

FlowRouter.route('/landing-page', {
    name: 'landing-page',
    action(props) {
        mount(AppLayout, {
            appHeader: (<AppHeader
                showRightButton={true}
                showLeftButton={false}
            />),
            body: (<LandingPage/>)
        });
    }
});

FlowRouter.route('/chat-room/:pin', {
    name: 'chat-room',
    action({pin}) {
        mount(AppLayout, {
            appHeader: (<AppHeader
                showRightButton={true}
                showLeftButton={true}
                title={`Chat Room ${pin}`}
            />),
            body: (<ChatPage roomNumber={pin}/>)
        });
    }
});

FlowRouter.route('/join', {
    name: 'join',
    action() {
        mount(AppLayout, {
            appHeader: (<AppHeader
                showRightButton={true}
                showLeftButton={true}
            />),
            body: (<JoinPage/>)
        });
    }
});

FlowRouter.notFound = {
    action() {
        mount(AppLayout, {
            appHeader: (<AppHeader
                showRightButton={false}
                showLeftButton={false}
            />),
            body: (<p>404 siden finnes ikke</p>)
        });
    }
};