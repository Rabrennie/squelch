import React from 'react';
import UserList from './userlist';
import Chat from './chat';
import Input from './input';

import {Join} from '../actions/channel';
import ChannelStore from '../stores/channels';
import {connectToStores} from 'fluxible-addons-react';

@connectToStores([ChannelStore], (context) => {
    return context.getStore(ChannelStore).getState();
})

class ChannelView extends React.Component {
    render() {
        return (
            <div className='channel-view'>
                <div className='io-container'>
                    <Chat /><Input />
                </div>
                <UserList />
            </div>
        );
    }
};

export default ChannelView;
