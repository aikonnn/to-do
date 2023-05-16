const {Client} = require("pg");

const client = new Client(`postgres://${process.env.POSTGRES_USER}:${process.env.POSTGRES_PASSWORD}@${process.env.BASE_ADDR}:${process.env.DB_PORT}/${process.env.DB_NAME}`);

client.connect();


export default async function handleTasks(req, res) {
    if(req.method == 'DELETE'){
        const ans = await client.query(`DELETE from tasks where id='${req.query.taskid}'`);
        res.status(200).json({
            status: 'success'
        });
    }
}