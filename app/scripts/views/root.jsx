import React from 'react';
import {ChannelView} from './channel';
import {Sidebar} from './sidebar';

export class View extends React.Component {
    render() {
        return (
            <div id='main-view'>
                <Sidebar /><ChannelView />
            </div>
        );
    }
};
