import express from "express";
import cors from "cors";

const server = express();
const PORT = 5000;

server.use(cors());
server.use(express.json());

const UserArr = [];
const TweetArr = [];

server.post('/sign-up', (req, res) => {
    if(!req.body.username || !req.body.avatar) return res.send("Todos os campos são obrigatórios");

    const USER = { username: req.body.username, avatar: req.body.avatar };
    UserArr.push(USER);
    res.status(200).send('OK');

});

server.post('/tweets', (req, res) => {
    const TWEET = { username: req.body.username, tweet: req.body.tweet };
    const logado = UserArr.find(user => user.username === TWEET.username);

    if(!logado) return res.send("UNAUTHORIZED");

    TweetArr.push(TWEET);

    return res.status(201).send('CREATED');
});

server.get('/tweets', (req, res) => {
  
    let i = TweetArr.length;
    let j = 0;
    const lastTen = [];

    while((i > 0 || j < 10) && TweetArr[i - 1] !== undefined) {
        const avatar = UserArr.find(user => user.username === TweetArr[i - 1].username).avatar;

        lastTen.push({
            username: TweetArr[i - 1].username,
            tweet: TweetArr[i - 1].tweet,
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


