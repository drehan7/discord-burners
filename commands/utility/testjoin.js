const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder().setName('testrole').setDescription('Test member role change'),
    cooldown: 5,
    async execute(interaction) {
        console.log('test');
    },
};
