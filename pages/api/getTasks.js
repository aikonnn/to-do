const {Client} = require("pg");

const client = new Client("postgres://postgres:pass@db:5432/todo");

client.connect();


export default async function getTasks(req, res) {
    const ans = await client.query("SELECT * from tasks");
    res.status(200).json({
        answer: ans.rows
    });
}