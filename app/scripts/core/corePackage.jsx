import { CompositeDisposable } from 'event-kit';

import shrug from '../commands/shrug';

const CoreCommandPackage = (Squelch) => {
    return {
        initialize() {
            this.subscriptions = new CompositeDisposable();
            this.subscriptions.add(Squelch.commands.register('shrug', shrug));
        },

        destroy() {
            if(this.subscriptions) this.subscriptions.dispose();
        }
    };
};

export default CoreCommandPackage;
