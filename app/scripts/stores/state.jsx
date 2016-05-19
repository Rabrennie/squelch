import Freezer from 'freezer-js';

const State = new Freezer({
    servers: {},
    config: {},
    configDir: '',
    route: { params: {} },
    theme: {}

    // TODO: add convenience methods for things like
    // isCurrentlyInChannelView, isCurrentlyInQueryView, isCurrentlyInServerView
    // getCurrentServer, getCurrentChannel, getCurrentQuery (not these but similar)
}, { live: false });

export default State;
