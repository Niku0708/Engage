const app = require("express")();
const server = require("http").createServer(app);
const cors = require("cors");

const io = require("socket.io")(server, {
	cors: {
		origin: "*",
		methods: [ "GET", "POST" ]
	}
});

app.use(cors());

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
	res.send('Running');
});

io.on("connection", (socket) => {
	socket.emit("me", socket.id);

	socket.on('join', (room) => {
		// console.log('user joined');
		socket.join(room);
	})

	socket.on("disconnect", () => {
		socket.broadcast.emit("callEnded")
		// console.log(socket.id + "disconnected");
	});

	socket.on("callUser", ({ userToCall, signalData, from, name }) => {
		io.to(userToCall).emit("callUser", { signal: signalData, from, name });
	});

	socket.on("answerCall", (data) => {
		io.to(data.to).emit("callAccepted", data.signal)
	});

	socket.on("sendMessage", (message, name, callback) => {
		// console.log(message);
		// console.log(name);
		io.to('room').emit("message", { user: name, text: message });
		callback();
	});
});

server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
