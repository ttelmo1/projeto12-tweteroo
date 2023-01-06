import express from "express";
import cors from "cors";

const server = express();
const PORT = 5000;

server.use(cors());
server.use(express.json());

const UserArr = [];
const TweetArr = [];

server.post('/sign-up', (req, res) => {
    const USER = { username: req.body.username, avatar: req.body.avatar };
    UserArr.push(USER);
    res.send(USER);
});

server.post('/tweets', (req, res) => {
    const TWEET = { username: req.body.username, tweet: req.body.tweet };
    for (let i = 0; i < UserArr.length; i++) {
        if (UserArr[i].username === TWEET.username) {
            TweetArr.push(TWEET);
            res.send("OK");
        }
        else {
            res.status(400).send("UNAUTHORIZED");
        }
    }
});

server.get('/tweets', (req, res) => {
  
    let i = TweetArr.length;
    let j = 0;
    const lastTen = [];

    while((i > 0 || j < 10) && tweets[i - 1] !== undefined) {
        const avatar = UserArr.find(user => user.username === tweets[i - 1].username).avatar;

        lastTen.push({
            username: tweets[i - 1].username,
            tweet: tweets[i - 1].tweet,
            avatar: avatar
        });

        i--;
        j++;

        if(j === 10) {
            break;
        }

}

    return res.send(lastTen);
});


server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


