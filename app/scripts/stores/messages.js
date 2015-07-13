import {BaseStore} from 'fluxible/addons';

class MessageStore extends BaseStore {
    constructor(dispatcher) {
        super(dispatcher);
        this.messages = {};
    }

    getState() {
        return {
            messages: this.messages
        };
    }

    dehydrate() {
        return this.getState();
    }

    rehydrate(state) {
        this.messages = state.messages;
    }
}

MessageStore.storeName = 'MessageStore';

export default MessageStore;
