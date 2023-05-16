const {Client} = require("pg");

const client = new Client(`postgres://${process.env.POSTGRES_USER}:${process.env.POSTGRES_PASSWORD}@${process.env.BASE_ADDR}:${process.env.DB_PORT}/${process.env.DB_NAME}`);

client.connect();


export default async function getTasks(req, res) {
    const ans = await client.query("SELECT * from tasks where user_id = $1::uuid", [req.query.userid]);
    res.status(200).json({
        answer: ans.rows
    });
}