

module.exports = {
    name: 'ban',
    description: 'cmd',
    execute(message,args){
        const member = message.mentions.users.first();
        if (member) {
            try{
                const tgt = message.guild.members.cache.get(member.id);
                tgt.ban();
                message.channel.send('User succesfully kicked!')
            }catch{
                message.channel.send('[Error] Member didnt get kicked!')
            }

        }else{
            message.channel.send('[Error] Member didnt get kicked!')
        }
    }
}