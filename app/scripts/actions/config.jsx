import _ from 'lodash';
import {AddServerAction} from './server'

export var ConfigLoadAction = (context, payload, done) => {

    _.each(payload.config.servers, (serverConfig) => {
        if (serverConfig.autoConnect) {
            context.executeAction(AddServerAction, {config: serverConfig});
        }
    });

    context.dispatch('CONFIG_LOAD', payload);
    done();
};
