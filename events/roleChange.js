const { Events } = require('discord.js');

module.exports = {
    name: Events.GuildMemberUpdate,
    execute(oldMember, newMember) {
        console.log('Member updated!');

        console.log('old:', oldMember.roles.cache);

        const member = oldMember.user.username;
        const old = oldMember.roles.cache.role[1].name;
        const newRole = newMember.roles.cache.role[1].name;

        // Make sure member went from 'tempy' to 'Burner'
        console.log(`Member: ${memberName} role from ${old} to ${newRole}`);
    },
};
