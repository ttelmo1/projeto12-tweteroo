import express from "express";
import cors from "cors";

const server = express();
const PORT = 5000;

server.use(cors());
server.use(express.json());

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


server.get("/", (req, res) => {
    res.send("Hello World");
}
);

