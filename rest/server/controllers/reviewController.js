const db = require('../db')


class reviewController{
    async create(req, res) {
        const { user_id, text } = req.body

        
        if (!user_id || !text ) {
            return res.status(400).json({ message: 'Не все параметры указаны!' })
        }

        const createReviewQuery = `
            INSERT INTO review (user_id, text) 
            VALUES ($1,$2) 
            RETURNING id, user_id, date, text;
        `
        const review = await db.query(createReviewQuery, [user_id,text]);

        return res.json(review.rows[0])
    }
   

    async getAll(req, res) {
        const showAllReviewQuery = `
           SELECT * FROM review;

        `
        const reviews = await db.query(showAllReviewQuery)
        return res.json(reviews.rows)
    }
 

    
}

module.exports = new reviewController()