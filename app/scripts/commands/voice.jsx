module.exports =  (args, { target, client }) => {
    if(!client.isChannel(target)) {
        return client.info('/voice can only be used in a channel');
    }

    if(!args) return client.info('Usage: /voice [nick...]');

    client.voice(target, args.split(/\s+/));
};
