const {Client} = require("pg");
const client = new Client(process.env.DATABASE_URL);

client.connect();


export default async function userHandler(req, res) {
    console.log("fetching db");
    const ans = await client.query("SELECT * from users");
    res.status(200).json({ 
        text: 'hello' ,
        answer: ans.rows
    });
}