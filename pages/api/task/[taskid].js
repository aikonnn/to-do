const {Client} = require("pg");

const client = new Client("postgres://postgres:pass@" + process.env.BASE_ADDR +":5432/todo");

client.connect();


export default async function handleTasks(req, res) {
    console.log("calling taskk endpoint")
    if(req.method == 'DELETE'){
        console.log("called delete");
        console.log(req.query.taskid);
        const ans = await client.query(`DELETE from tasks where id='${req.query.taskid}'`);
        res.status(200).json({
            status: 'success'
        });
    }
}