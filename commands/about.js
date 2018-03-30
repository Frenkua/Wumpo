
const embed = new Discord.RichEmbed()
  .setTitle("About.. me.")
  /*
   * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
   */
  .setColor("#00AE86")
  .setDescription("**Hello!**\nI am Wumpo, your virtual **dog**. Well, Fetch the help!");
  /*
   * Takes a Date object, defaults to current date.
   */
  .setTimestamp()
  /*
  * .addField("This is a field title, it can hold 256 characters",
   * "This is a field value, it can hold 2048 characters.")
    */
  /*
   * Inline fields may not display as inline if the thumbnail and/or image is too big.
   */
  /* .addField("Inline Field", "They can also be inline.", true) */
  /*
   * Blank field, useful to create some space.
   */
  /* .addBlankField(true) */
  /* .addField("Inline Field 3", "You can have a maximum of 25 fields.", true); */
  exports.run = (client, message, args) => {
    message.channel.send({embed: RequestReturn}).catch(console.error);
}
