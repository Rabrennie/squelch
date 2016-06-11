import { CompositeDisposable } from 'event-kit';

import shrug from '../commands/shrug';
import me from '../commands/me';

const CoreCommandPackage = (Squelch) => {
    return {
        initialize() {
            this.subscriptions = new CompositeDisposable();
            this.subscriptions.add(Squelch.commands.register('shrug', shrug));
            this.subscriptions.add(Squelch.commands.register('me', me));
        },

        destroy() {
            if(this.subscriptions) this.subscriptions.dispose();
        }
    };
};

export default CoreCommandPackage;
