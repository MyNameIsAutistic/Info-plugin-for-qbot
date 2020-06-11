exports.run = async (client, message, args) => {

   //Shows info on the bot when "info" is said with your prefix, so it would look something like this: !info
    const m = await message.channel.send("**INFO LOADING...**");
    m.edit(`PUT YOUR INFO ABOUT THE BOT HERE`);
  }