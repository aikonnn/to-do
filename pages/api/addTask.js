const {Client} = require("pg");

const client = new Client(`postgres://${process.env.POSTGRES_USER}:${process.env.POSTGRES_PASSWORD}@${process.env.BASE_ADDR}:${process.env.DB_PORT}/${process.env.DB_NAME}`);

client.connect();


export default async function addTasks(req, res) {
    console.log("adding task");
    const ans = await client.query("INSERT INTO tasks(user_id, task, urgency) values(uuid_generate_v4(), 'init' ,1)");
    res.status(200).json({
        status: 'success'
    });
}