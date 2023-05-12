const {Client} = require("pg");

const client = new Client("postgres://postgres:pass@db:5432/todo");

client.connect();


export default async function userHandler(req, res) {
    console.log("fetching db");
    const ans = await client.query("SELECT * from users");
    res.status(200).json({
        answer: ans.rows
    });
}