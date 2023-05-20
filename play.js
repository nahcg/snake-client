const connect = require("./client.js");

console.log("Connecting ...");
connect();

// setup interface to handle user input from stdin

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput); // event listener for stdin
  // function runs when it receives input from keyboard
  const handleUserInput = function (data) {
    if (data === "ctrl+c") {
      console.log("Client ended game: ", data)
      process.exit()
    }
  };
  return stdin;
};
