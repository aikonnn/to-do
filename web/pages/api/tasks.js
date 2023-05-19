import client from "../../utils/dbpool";


export default async function addTasks(req, res) {
    if(req.method == 'POST'){
        const ans = await client.query("INSERT INTO tasks(user_id, task, urgency) values($1::uuid, 'write your task here' ,3)", [req.body.userid]);
        res.status(200).json({
        status: 'success'
        });
    } else if(req.method == 'PUT'){
        const ans = await client.query("UPDATE tasks SET task = $1, urgency = $2 WHERE id = $3", [req.body.task, req.body.urgency, req.body.taskid]);
        res.status(200).json({
        status: 'success'
        });
    } else {
        res.status(400).json({
            error: 'unsupported method'
        })
    }
}