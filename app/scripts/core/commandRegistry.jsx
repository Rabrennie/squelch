import { Disposable } from 'event-kit';
import State from '../stores/state';

export default class CommandRegistry {
    constructor() {
        this.commands = {};
    }

    // Adds a command to the registry
    // Name is what will trigger the command ("msg" will trigger on /msg)
    // Fn is a callback that will be passed the args and event info on execution
    // Opts are unused for now?
    // Returns a disposable that can be used to remove the command from the registry
    register(name, fn, opts = {}) {
        if(this.commands[name]) {
            throw new Error(`Command name conflict: a command has already registered under "${name}".`);
        }

        opts.fn = fn;
        this.commands[name] = opts;
        return new Disposable(() => this.unregister(name));
    }

    // Removes a command from the registry
    unregister(name) {
        delete this.commands[name];
    }

    dispatch(name, args) {
        const command = this.commands[name];

        if(!command) return;

        const context = this._getCommandContext();

        const result = command.fn(args, context);

        if(!result) return;

        // TODO: send PRIVMSG if in channel or query view
        // TODO: show info message if in server view
    }

    _getCommandContext() {
        // TODO: get the command context
    }
}
