

module.exports = {
    name: 'Kick',
    description: 'Kicks a user by mentioning them!',
    execute(message,args){
        const member = message.mentions.users.first();
        if (member) {
            try{
                const tgt = message.guild.members.cache.get(member.id);
                tgt.kick();
                message.channel.send('User succesfully kicked!')
            }catch{
                message.channel.send('[Error_1] Member didnt get kicked!')
            }

        }else{
            message.channel.send('[Error_2] Member didnt get kicked!')
        }
    }
}