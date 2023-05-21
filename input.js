// Stores the active TCP connection object.
let connection;

// setup interface to handle user input from stdin
const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  // function runs when it receives input from keyboard
  const handleUserInput = function (data) {
    // if user presses ctrl + c, exits game
    if (data === "\u0003") {
      console.log("Exit game")
      process.exit()
    }
    // user controls snake using WASD keys
    if (data === "w") {
      conn.write("Move: up");
    } else if (data === "a") {
      conn.write("Move: left");
    } else if (data === "s" ) {
      conn.write("Move: down");
    } else if (data === "d" ) {
      conn.write("Move: right");
    }
    // snake messages
    if (data === "8") {
      conn.write("Say: GG")
    } else if (data === "9") {
      conn.write("Say: this is fun") 
    } else if (data === "0") {
      conn.write("Say: be careful")
    }
  };
  stdin.on("data", handleUserInput); // event listener for stdin
  return stdin;
};

module.exports = { setupInput };