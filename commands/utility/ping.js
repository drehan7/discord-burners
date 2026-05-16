const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder().setName('ping').setDescription('replied with pong'),
    cooldown: 5,
    async execute(interaction) {
	    console.log('fubby wubby ping pong here before interaction reply :)');
        await interaction.editReply('Pong!');
    },
};
