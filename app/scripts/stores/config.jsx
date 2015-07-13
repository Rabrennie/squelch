import {ConfigLoadAction} from '../actions/config.jsx'
import Squelch from '../core/squelch';

import Client from 'squelch-client';
import _ from 'lodash';
import {BaseStore} from 'fluxible/addons';

class ConfigStore extends BaseStore {
    constructor(dispatcher) {
        super(dispatcher);
        this.config = {};

        this.__loadConfig();
    }

    getState() {
        return {
            config: this.config
        };
    }

    __loadConfig() {
        Squelch.config.read()
            .then((config) => {
                this.config = config;
                // FIGURE OUT HOW TO DISPATCH CONFIGLOADACTION
            })
            .catch((err) => {
                alert('Something went wrong while trying to load your config\n\n' + (err.message || err));
                require('remote').process.exit(1);
            })
            .done();
    }
}

ConfigStore.storeName = 'ConfigStore';

export default ServerStore;
