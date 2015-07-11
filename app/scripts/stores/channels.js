
import {BaseStore} from 'fluxible/addons';
import _ from 'lodash';

class ChannelStore extends BaseStore {
    constructor(dispatcher) {
        super(dispatcher);
        this.channels = {};
    }

    getState() {
        return {
            channels: this.channels
        };
    }

    dehydrate() {
        return this.getState();
    }

    rehydrate(state) {
        _.extend(this, state);
    }
}

ChannelStore.storeName = 'ChannelStore';

export default ChannelStore;
