'use strict';

var BitcoinJsonRpc = require('./lib');
var requests = BitcoinJsonRpc.Requests.create();

if (require.main === module) {
  var config = require('config');
  var client = BitcoinJsonRpc.Client.create(config.get('client'));
<<<<<<< HEAD
  client.sendRequest(requests.GetBlock(['000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f', false]), console.log);
=======
  client.sendRequest(requests.GetBlockHash(0), console.log);
>>>>>>> fix param
}
