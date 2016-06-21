const parse = require('string-args');

module.exports =  (args, { target, client }) => {

	args = parse('reason target', args);

	if(!args.reason) {
		args.reason = 'Quitting...';
	}

	if(!client.isConnected()) {
		return client.info(`You are not connected to this server`);
	}

	client.disconnect(args.reason)

};
