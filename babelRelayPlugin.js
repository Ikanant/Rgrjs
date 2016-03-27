// `babel-relay-plugin` returns a function for creating plugin instances
var getBabelRelayPlugin = require('babel-relay-plugin');

// load previously saved schema data
var schemaData = require('./data/schema.json').data;

//create a plugin instance
module.exports = getBabelRelayPlugin(schemaData);