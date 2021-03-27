
// work in progress [there are still errors in here!]
module.exports = {
    name: 'Clear',
    description: 'Deletes messages from the chat!',
    async execute(message,args){
        if(!args[0]) return message.reply('Please enter the amount of messages u want to delete!');
        if(isNaN(args[0])) return message.reply('Please enter a number of messages u want to delete!');

        if(args[0] > 100) return message.reply('You can only do a 100!');
        if(args[0] < 1) return message.reply('You must delete 1 message!');

        await message.channel.messages.fetch({limit: args[0]}).then(messages => {
            message.channel.bulkDelete(messages);
        });
    }
}