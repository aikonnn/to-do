const {Client} = require("pg");

const client = new Client("postgres://postgres:pass@localhost:5432/todo");

client.connect();


export default async function getTasks(req, res) {
    console.log("adding task");
    const ans = await client.query("INSERT INTO tasks(user_id, task, urgency) values(uuid_generate_v4(), 'init' ,1)");
    res.status(200).json({
        status: success
    });
}