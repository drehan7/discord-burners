const { Events, MessageFlags, Collection, ModalBuilder, TextInputBuilder, ActionRowBuilder, TextInputStyle } = require('discord.js');

const handleButton = async (interaction) => {
    if (interaction && interaction.customId === 'button1') {
        const modal = new ModalBuilder()
            .setCustomId('myModal')
            .setTitle('My Awesome Modal');

        const favoriteColorInput = new TextInputBuilder()
            .setCustomId('favoriteColorInput')
            .setLabel("What's your favorite color?")
            .setStyle(TextInputStyle.Short);

        // Action rows can only hold ONE text input each in modals
        const firstActionRow = new ActionRowBuilder().addComponents(favoriteColorInput);

        modal.addComponents(firstActionRow);

        console.log('before show modal');
        await interaction.showModal(modal);
    }
}

module.exports = {
    name: Events.InteractionCreate,
    async execute(interaction) {
        if (interaction.isButton()) {
            return handleButton(interaction);
        }
        if (!interaction.isChatInputCommand()) return;

	    console.log("Start function at: ", Date.now());
        try {
            console.log("start defer at: ", Date.now());
            if (!interaction.deferred) {
                await interaction.deferReply();
                console.log("deferred at: ", Date.now());
            }
        } catch (err) {
	    if (err.code === 10062) {
		return;
	    }
            console.log('defer failed at: ', Date.now());
            console.log('Could not defer reply, error: ', err);
            return;
        }


        const command = interaction.client.commands.get(interaction.commandName);
        if (!command) {
            console.error('No matching command:', interaction.commandName);
            return;
        }


        try {
            await command.execute(interaction);
        } catch (err) {
            console.error("ERROR:", err);
            if (interaction.replied || interaction.deferred) {
                await interaction.followUp({
                    content: `There was an error while executing this command!`,
                    flags: MessageFlags.Ephemeral,
                });
            } else {
                await interaction.reply({
                    content: `There was an error while executing this command!`,
                    flags: MessageFlags.Ephemeral,
                });
            }
        }
    }
};
