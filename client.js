const net = require("net");

// establishes a connection with the game server
const connect = function () {
  // conn object that interacts with server
  const conn = net.createConnection({
    host: "localhost", // IP address here
    port: 50541, // PORT number here
    });    
    conn.on("data", (data) => {
      console.log(data);
    }),
    // connection event
    conn.on("connect", () => {
      console.log("Successfully connected to game server")
      conn.write("Name: SNK") // name command
    }),

    // interpret incoming data as text
    conn.setEncoding("utf8");

    return conn;
};

module.exports = { connect };
