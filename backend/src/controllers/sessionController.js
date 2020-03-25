const connection = require('../database/connection');

module.exports = {
    async create(req,resp){
        const {id} = req.body;

        const ong = await connection("ongs")
            .where("id",id)
            .select("name")
            .first()

        if(!ong){
            resp.status(400).json({error: "No ong found with this id"});
        }

        resp.json({ong});
    }
}