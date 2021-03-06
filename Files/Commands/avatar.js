let Embeds = require("../embeds");

module.exports = (client, msg, cmd, args) => {
    if (cmd === "avatar") {
        function returnArgsIsMention() {
            if (args[0] && msg.mentions && msg.mentions.members && args[0] === msg.mentions.members.first().toString()) return true;
            else if (!args[0]) return true;
            else return false;
        }
    
        let finalUser;
        if (returnArgsIsMention() && args[0]) finalUser = msg.mentions.members.first().user;
        else if (returnArgsIsMention() && !args[0]) finalUser = msg.author;
    
        if (args[1] || !returnArgsIsMention()) Embeds.SendCommandWrongUsage(msg, 12);
        else Embeds.SendAvatarCommandMessage(msg, finalUser);
    }
};
