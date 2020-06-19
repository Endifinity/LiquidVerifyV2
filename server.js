
    // If message.member is uncached, cache it.
    if (!message.member) message.member = await message.guild.fetchMember(message);

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase();
    
    if (cmd.length === 0) return;
    
    // Get the command
    let command = client.commands.get(cmd);
    // If none is found, try to find it by alias
    if (!command) command = client.commands.get(client.aliases.get(cmd));

    // If a command is finally found, run the command
    if (command) 
        command.run(client, message, args);
});

// WELCOME MESSAGe

 client.on("guildMemberAdd", (member) => {

    let channel = client.channels.get('627712783957491712');

    const embed = new Discord.RichEmbed()
    .setColor("#2ecc71")
    .setTitle(`**Welcome**`)
    .setDescription(`**Welcome!** ${member} **to Vero! We hope you have a good time here!**`)
    .setAuthor("VeroAPI","https://i.imgur.com/UaHfuUX.png")
    .setTimestamp()
    .setImage("https://i.imgur.com/UaHfuUX.png")
    
    channel.send(embed)
});


client.login(process.env.TOKEN);
