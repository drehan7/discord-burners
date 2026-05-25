const { 
	SlashCommandBuilder, 
	ActionRowBuilder, 
	ButtonBuilder, 
	ButtonStyle, 
} = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('magic8bot')
        .setDescription("Wake up the Magic 8 Bot"),

    async execute(interaction) {
        const button = new ButtonBuilder()
            .setCustomId('button1')
            .setLabel('Wake up Magic 8 bot')
            .setStyle(ButtonStyle.Danger);

        const message = "You are about to ask the Magic 8 Bot if you should say 'fuck it'.";

        const act = new ActionRowBuilder().addComponents(button);

        await interaction.editReply({content: message, components: [act]});
    }
}
