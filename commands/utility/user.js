const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder().setName('user').setDescription('Provides information about the user'),
    cooldown: 10,
    async execute(interaction) {
        interaction.client.emit('guildMemberAdd', interaction.member);
        await interaction.reply(
            `This command was run by ${interaction.user.username}, who joined on ${interaction.member.joinedAt}.`,
        );
    },
};
