const db = require('../db')


class restInfoController{
    async create(req, res) {
        const { name, address, email, phone, description } = req.body

        if (!name || !address || !email || !phone || !description) {
            return res.status(400).json({ message: 'Не все параметры указаны!' })
        }

        const createInfoQuery = `
            INSERT INTO restInfo (name, address, email, phone, description) 
            VALUES ($1, $2, $3, $4, $5) 
            RETURNING id, name, address, email, phone, description;
        `
        const info = await db.query(createInfoQuery, [name, address, email, phone, description]);

        return res.json(info.rows[0])
    }
   

    async getAll(req, res) {
        const showAllInfoQuery = `
           SELECT * FROM restInfo;

        `
        const info = await db.query(showAllInfoQuery)
        return res.json(info.rows)
    }
 

    
}

module.exports = new restInfoController()