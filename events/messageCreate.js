const {Events} = require('discord.js');

module.exports = {
	name: Events.MessageCreate,
	async execute(message) {
		// console.log('message was sent: ', message);
		if (message.author.bot) return;
		const client = message.client;
		const msg = `Message was sent by ${message.author.username}`;
		const channel = client.channels.cache.get(message.channelId);

		await channel.send(msg);
	}
};

