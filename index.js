const Client = require('./structures/Client');

/* Global Options */
let options = {
  prefix: '?'
}

const client = new Client(options);
client.run();
