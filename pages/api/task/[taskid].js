import client from "../../../utils/dbpool";


export default async function handleTasks(req, res) {
    if(req.method == 'DELETE'){
        const ans = await client.query(`DELETE from tasks where id='${req.query.taskid}'`);
        res.status(200).json({
            status: 'success'
        });
    }
}