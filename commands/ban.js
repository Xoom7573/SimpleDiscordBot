

module.exports = {
    name: 'Ban',
    description: 'Bans a user by mentioning them!',
    execute(message,args){
        const member = message.mentions.users.first();
        if (member) {
            try{
                const tgt = message.guild.members.cache.get(member.id);
                tgt.ban();
                message.channel.send('User succesfully banned!')
            }catch{
                message.channel.send('[Error_1] Member didnt get banned!')
            }

        }else{
            message.channel.send('[Error_2] Member didnt get banned!')
        }
    }
}