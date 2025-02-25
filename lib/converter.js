const Discord = require('discord.js'); 
const client1 = new Discord.Client({intents: 3276799);
const client2 = new Discord.Client({intents: 3276799);
const client3 = new Discord.Client({intents: 3276799);
//تقدر تضيف زيادة

const login = [
  client1.login('token1'),
  client2.login('token2'),
  client3.login('token3')
//اذا ضفت توكنات اكثر ضيف هنا بعد
];

Promise.all(login)
  .then(() => {
    console.log('All bots login successfully!');
    [client1, client2, client3].forEach(client => {

//الاكواد حقتك هنا
      client.on('ready', () => {
        console.log(`Logged in as ${client.user.tag}!`);
      });


//حقت الايرور لاتلعب فيها
});
    })
  .catch(error => {
    console.error('Error login in one bot:', error);
  });
