import React from 'react';
import connectToStores from 'alt/utils/connectToStores';

import MessageStore from '../stores/messages';

import UserList from './userlist';
import Chat from './chat';
import Input from './input';

@connectToStores
class ChannelView extends React.Component {
    static getStores() { return [MessageStore]; }
    static getPropsFromStores() { return MessageStore.getState(); }

    render() {
        const { serverId } = this.props.params;
        const { messages } = this.props;
        const channel = decodeURIComponent(this.props.params.channel);

        let chanMessages = [];
        if(messages[serverId] && messages[serverId].channels[channel]) {
            chanMessages = messages[serverId].channels[channel];
        }

        return (
            <div className='channel-view'>
                <div className='io-container'>
                    <Chat messages={chanMessages} />
                    <Input serverId={serverId} channel={channel} />
                </div>
                <UserList serverId={serverId} channel={channel} />
            </div>
        );
    }
}

export default ChannelView;
