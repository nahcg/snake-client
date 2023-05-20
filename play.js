const { connect } = require("./client.js");
const { setupInput } = require("./input.js");

console.log("Connecting ...");
let result = connect();
setupInput(result);