import React from 'react';
import MainView from './components/root';
import LessLoader from 'less-hot';
import Squelch from './core/squelch';
import _ from 'lodash';

import Fluxible from 'fluxible';
import ChannelStore from './stores/channels';

Squelch.config.read()
.then((config) => {
    _.each(config.servers, (serverConfig) => {
        if (serverConfig.autoConnect) {
            Squelch.serverManager.addServer(serverConfig);
        }
    });
})
.catch((err) => {
    alert('Something went wrong while trying to load your config\n\n' + (err.message || err));
    require('remote').process.exit(1);
})
.done();

// Load our less styles
var lessLoader = new LessLoader();
document.querySelector('head').appendChild(lessLoader('./app/less/app.less'));

let app = new Fluxible({
    component: MainView,
    stores: [
        ChannelStore
    ]
});

export default app;
