import express from "express";
import cors from "cors";

server.use(cors());
server.use(express.json());

const server = express();
const PORT = 5000;
const USER = { username: req.body.username, avatar: req.body.avatar };
const TWEET = { username: req.body.username, tweet: req.body.tweet };

const UserArr = [];
const TweetArr = [];

server.post('/sign-up', (req, res) => {
    UserArr.push(USER);
    res.send(USER);
});

server.post('/tweets', (req, res) => {
    for(let i = 0; i < UserArr.length; i++) {
        if(UserArr[i].username === TWEET.username) {
            TweetArr.push(TWEET);
            res.send("OK");
        }
        else{
            res.send("UNAUTHORIZED");
        }
    }
});





server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


