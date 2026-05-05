const { Events } = require('discord.js');
const {welcomeChannel} = require('../config.json');

function isNewBurner(oldMember, newMember) {
    // Has Burner role in new, not in old
    const addedRoles = newMember.roles.cache.filter(role => !oldMember.roles.cache.has(role.id));

    const found = addedRoles.find(r => r.name === "Burner");

    return !!found;
}

module.exports = {
    name: Events.GuildMemberUpdate,
    async execute(oldMember, newMember) {

        // If update to member is role change to burner
        if (!isNewBurner(oldMember, newMember)) return;

        // Get Member object
        const member = oldMember.user;

        // Pings member
        const welcomeMessage = `Welcome ${member}! Please get comfortable, read through the handbook, and choose whatever roles you like. We are glad you found us. How are you doing today?`;

        // Get reference to client
        const client = oldMember.client;
        if (!welcomeChannel) {
            console.error('welcomeChannel not found');
            return;
        }

        // Get channel to send meesage to
        const channel = client.channels.cache.get(welcomeChannel);
        channel.sendTyping(); // 'bot' is typing...
        if (channel) {
            await channel.send(welcomeMessage);
        }
    },
};
