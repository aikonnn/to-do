import client from "../../../utils/dbpool";


export default async function handleUserID(req, res) {
    if(req.method == 'GET'){
        console.log("get id");
        const ans = await client.query(`SELECT * from users where email='${req.query.email}'`);
        if(ans.rows.length === 0){
            //add to table
            await client.query("INSERT INTO users(email, pass) values($1,crypt($2, gen_salt('bf')))",[req.query.email, "extpass"]);
            const newans = await client.query(`SELECT * from users where email='${req.query.email}'`);
            return res.status(200).json({
                userid: newans.rows[0].id
            })
        } else {
            return res.status(200).json({
                userid: ans.rows[0].id
            })
        }
    }
}