// setup interface to handle user input from stdin

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  // function runs when it receives input from keyboard
  const handleUserInput = function (data) {
    if (data === "\u0003") {
      console.log("Client ended game")
      process.exit()
    }
  };
  stdin.on("data", handleUserInput); // event listener for stdin
  return stdin;
};

module.exports = setupInput;
