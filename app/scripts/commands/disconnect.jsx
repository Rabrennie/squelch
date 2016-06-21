const parse = require('string-args');

module.exports =  (args, { target, client }) => {

	if(!client.isConnected()) {
		return client.info(`You are not connected to this server`);
	}

	client.disconnect(args)

};
