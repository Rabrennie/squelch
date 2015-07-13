import React from 'react';
import SquelchView from './components/squelchView';
import LessLoader from 'less-hot';
import Squelch from './core/squelch';
import _ from 'lodash';

import Fluxible from 'fluxible';
import FluxibleComponent from 'fluxible-addons-react/FluxibleComponent';

import ServerStore from './stores/servers';

import {AddServerAction} from './actions/server'

// Load our less styles
var lessLoader = new LessLoader();
document.querySelector('head').appendChild(lessLoader('./app/less/app.less'));

let app = new Fluxible({
    stores: [
        ServerStore
    ]
});

let context = app.createContext();

React.render(
    <FluxibleComponent context={context.getComponentContext()}>
        <SquelchView />
    </FluxibleComponent>,
    document.getElementById('squelch-root')
);

Squelch.config.read()
.then((config) => {
    _.each(config.servers, (serverConfig) => {
        if (serverConfig.autoConnect) {
            context.executeAction(AddServerAction, {config: serverConfig});
        }
    });
})
.catch((err) => {
    alert('Something went wrong while trying to load your config\n\n' + (err.message || err));
    require('remote').process.exit(1);
})
.done();

export default app;
