import client from "../../utils/dbpool";


export default async function userHandler(req, res) {
    if(req.method === 'POST'){
        console.log("called regis");
        console.log(req.body.email);
        console.log(req.body.pass);
        const dupe = await client.query(`SELECT * FROM users where email ='${req.body.email}'`);
        if(dupe.rows.length !== 0){
            res.status(401).json({
                error: "Email is already registered"
            })
        }
        const ans = await client.query(`INSERT INTO users(email, pass) values('${req.body.email}',crypt('${req.body.pass}', gen_salt('bf')))`);
        res.status(200).json({
            status:'success'
        })
    } else if(req.method === 'GET'){
        console.log("fetching db");
        const ans = await client.query("SELECT * from users");
        res.status(200).json({
            answer: ans.rows
        });
    }
}