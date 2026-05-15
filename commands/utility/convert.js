const { SlashCommandBuilder, Message, userMention } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder().setName('convert').setDescription('convert some units')
		  .addNumberOption((option) => option.setName('value').setDescription('The value to convert (use . not ,)').setRequired(true))
		  .addStringOption((option) => option.setName('from').setDescription('The units to convert from').setRequired(true)
			.addChoices(
        { name: 'C', value: 'C' },
        { name: 'F', value: 'F' },
        { name: 'Miles', value: 'Miles' },
        { name: 'KM', value: 'KM' },
        { name: 'Feet', value: 'Feet' },
        { name: 'Meters', value: 'Meters' },
        { name: 'Inches', value: 'Inches' },
        { name: 'CM', value: 'CM' },
        { name: 'MM', value: 'MM' },
        { name: 'Gallon', value: 'Gallon' },
        { name: 'Liter', value: 'Liter' },

      					)
					)
		  .addStringOption((option) => option.setName('to').setDescription('The units to convert to').setRequired(true)
			.addChoices(
        { name: 'C', value: 'C' },
        { name: 'F', value: 'F' },
		{ name: 'Miles', value: 'Miles' },
        { name: 'KM', value: 'KM' },
        { name: 'Feet', value: 'Feet' },
        { name: 'Meters', value: 'Meters' },
		{ name: 'Inches', value: 'Inches' },
        { name: 'CM', value: 'CM' },
		{ name: 'MM', value: 'MM' },
        { name: 'Gallon', value: 'Gallon' },
        { name: 'Liter', value: 'Liter' },		
      					)
					),
	   // .addChannelOption((option) => option.setName('channel').setDescription('The channel to echo into')),
	async execute(interaction) {
		  const value = interaction.options.getNumber('value');
		  const from = interaction.options.getString('from');
		  const to = interaction.options.getString('to');
				
		//const user = userMention(name);
		// interaction.user is the object representing the User who ran the command
		// interaction.member is the GuildMember object, which represents the user in the specific guild

		if (from === "C" && to === "F") {
			const Ftemp = value * 1.8 + 32;  //C to F
				await interaction.editReply(
			   `You converted ${value.toFixed(1)} ${from} to ${Ftemp.toFixed(1)} ${to}`)
										}
		else if (from === "F" && to === "C") {
			const Ctemp = (5/9) * (value - 32);  //F to C
				await interaction.editReply(
			   `You converted ${value.toFixed(1)} ${from} to ${Ctemp.toFixed(1)} ${to}`)
							}
		else if (from === "Miles" && to === "KM") {
			const kmeters = value * 1.609;  //Miles to KMs
				await interaction.editReply(
			   `You converted ${value.toFixed(1)} ${from} to ${kmeters.toFixed(1)} ${to}`)
							}
		else if (from === "KM" && to === "Miles") {
			const Mile = value / 1.609;  //KMs to Miles
				await interaction.editReply(
			   `You converted ${value.toFixed(1)} ${from} to ${Mile.toFixed(1)} ${to}`)
							}
			else if (from === "Feet" && to === "Meters") {
			const meters = value * 0.3048;  //Feet to Meters
				await interaction.editReply(
			   `You converted ${value.toFixed(1)} ${from} to ${meters.toFixed(1)} ${to}`)
							}
		else if (from === "Meters" && to === "Feet") {
			const Feet = value / 0.3048;  //Meters to Feet
				await interaction.editReply(
			   `You converted ${value.toFixed(1)} ${from} to ${Feet.toFixed(1)} ${to}`)
							}

		else if (from === "Inches" && to === "CM") {
			const  CM = value * 2.54;  //Inches to CM
				await interaction.editReply(
			   `You converted ${value.toFixed(1)} ${from} to ${CM.toFixed(1)} ${to}`)
							}
		else if (from === "CM" && to === "Inches") {
			const Inches = value / 2.54;  //CM to inches
				await interaction.editReply(
			   `You converted ${value.toFixed(1)} ${from} to ${Inches.toFixed(1)} ${to}`)
							}

		else if (from === "Inches" && to === "MM") {
			const  MM = value * 25.4;  //Inches to MM
				await interaction.editReply(
			   `You converted ${value.toFixed(1)} ${from} to ${MM.toFixed(1)} ${to}`)
							}
		else if (from === "MM" && to === "Inches") {
			const Inches = value / 25.4;  //MM to inches
				await interaction.editReply(
			   `You converted ${value.toFixed(1)} ${from} to ${Inches.toFixed(1)} ${to}`)
							}

		else if (from === "Gallon" && to === "Liter") {
			const  Liter = value * 3.785;  //Gallon to Liter
				await interaction.editReply(
			   `You converted ${value.toFixed(1)} ${from} to ${Liter.toFixed(1)} ${to}`)
							}
		else if (from === "Liter" && to === "Gallon") {
			const Gallon = value / 3.785;  //Liter to Gallon
				await interaction.editReply(
			   `You converted ${value.toFixed(1)} ${from} to ${Gallon.toFixed(1)} ${to}`)
							}

		else 	{ await interaction.editReply(
			   `You did it wrong, try again`)
			    }				
								},				
					};
