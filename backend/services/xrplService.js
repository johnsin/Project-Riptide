// /backend/services/xrplService.js
const xrpl = require('xrpl');

async function getClient() {
  const client = new xrpl.Client('wss://s.devnet.rippletest.net:51233'); // Devnet
  await client.connect();
  console.log('Connected to XRPL Devnet');
  return client;
}

module.exports = { getClient };
