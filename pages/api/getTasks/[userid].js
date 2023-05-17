import client from "../../../utils/dbpool";

export default async function getTasks(req, res) {
    const ans = await client.query("SELECT * from tasks where user_id = $1::uuid order by urgency desc", [req.query.userid]);
    res.status(200).json({
        answer: ans.rows
    });
}