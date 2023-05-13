const {Client} = require("pg");

const client = new Client("postgres://postgres:pass@localhost:5432/todo");

client.connect();


export default async function getTasks(req, res) {
    console.log("retrieving tasks");
    const ans = await client.query("SELECT * from tasks");
    console.log(ans.rows);
    res.status(200).json({
        answer: ans.rows
    });
}