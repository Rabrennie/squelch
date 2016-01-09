import React from 'react';
import _ from 'lodash';
import connectToStores from 'alt/utils/connectToStores';

import ServerStore from '../stores/servers';

import ServerListItem from './serverListItem';

class ServerList extends React.Component {
    static getStores() { return [ServerStore]; }
    static getPropsFromStores() { return ServerStore.getState(); }

    shouldComponentUpdate(newProps) {
        return this.props.servers !== newProps.servers;
    }

    render() {
        const servers = _.map(this.props.servers, (server) =>
            <ServerListItem key={server.id} server={server}/>
        );

        return (
            <div className='server-list'>{servers}</div>
        );
    }
}

ServerList = connectToStores(ServerList)
export default ServerList;
