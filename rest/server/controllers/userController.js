const db = require('../db')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const nodemailer = require('nodemailer')
const bodyParser = require('body-parser')

const generateJwt = (id, login, role) => {
    return jwt.sign(
        { id, login, role},
        process.env.SECRET_KEY,
        { expiresIn: '24h' }
    );
};

class userController{
    async registration(req, res) {
        const {login, password, role, email, phone} = req.body   
        
        if (!login || !password){
            return res.status(400).json({ message: 'Некорректные данные' })
        }
        
        const candidate = await db.query('SELECT * FROM users WHERE login = $1', [login]);
        if (candidate.rows.length > 0) {
            return res.status(400).json({ message: 'Пользователь с таким логином уже существует' })
        }
        const hashPassword = await bcrypt.hash(password, 5)
        const userResult = await db.query(
            'INSERT INTO users (login, password, role, email, phone) VALUES ($1, $2, $3, $4, $5) RETURNING id, login, role, email, phone',
            [login, hashPassword, role, email, phone]
        )
        const userId = userResult.rows[0].id
 //       const userAdded = userResult.rows[0]
//        await db.query('INSERT INTO Basket (user_id) VALUES ($1)', [userId])

        const token = generateJwt(userId, login, role)

        return res.json({ token })
        
    }

    async login(req, res) {
        
        const {login, password} = req.body   
    
        if (!login || !password) {
            return res.status(400).json({ message: 'логин и пароль обязательны' })
            }
        const result = await db.query('SELECT * FROM users WHERE login = $1', [login])

        if (result.rows.length === 0) {
            return res.status(404).json({ message: 'Указан неверный логин' })
        }

        const user = result.rows[0]
        const comparePassword = bcrypt.compareSync(password, user.password)
        
        if (!comparePassword) {
            return res.status(400).json({ message: 'Указан неверный пароль' })
        }

        const token = generateJwt(user.id, user.login, user.role)
   
        return res.json({ token })
     
    }

    async check(req, res, next) {
        const token = generateJwt(req.user.userId, req.user.login, req.user.role)
        return res.json({token})
    }

    async getAll(req, res) {
        const showAllusersQuery = `
           SELECT * FROM users;

        `
        const users = await db.query(showAllusersQuery)
        return res.json(users.rows)
    }

    async getOne(req, res) {
        const { id } = req.params
    
        if (!id) {
            return res.status(400).json({ message: 'ID не указан' })
        }
    
        const getUserQuery = `
            SELECT * FROM users 
            WHERE id = $1;
            
        `
        const type = await db.query(getUserQuery, [id]);
    
        if (type.rows.length === 0) {
            return res.status(404).json({ message: 'Пользователь с указанным ID не найден' })
        }
    
        return res.json(type.rows[0])
    }

    async deleteOne(req, res) {
        const { id } = req.params
        console.log(req.id)
        if (!id) {
            return res.status(400).json({ message: 'ID пользователя не указан' })
        }
    
        const deleteUserQuery = `
            DELETE FROM users 
            WHERE id = $1
            RETURNING id;
        `
    
        const deleteUser = await db.query(deleteUserQuery, [id])
    
        if (deleteUser.rows.length === 0) {
            return res.status(404).json({ message: 'Пользователь не найден' })
        }

        return res.json({ message: 'Пользователь успешно удален' })
    }
    
    async updateUser(req, res) {
        
        const { login, password, role, email, phone ,id } = req.body
     
        if (!id) {
            return res.status(400).json({ message: 'ID пользователя не указан' })
        }
    
        const updateUser = await db.query(
            `
            UPDATE users SET login = $1, password = $2, role = $3, email = $4, phone = $5 WHERE id = $6 
            RETURNING id, login, role, email, phone;
            `,
            [login, password, role, email, phone, id]
        )
    
    
        if (updateUser.rows.length === 0) {
            return res.status(404).json({ message: 'Пользователь не найден' })
        }

        return res.json({ message: 'Данные успешно изменены' })
    }



 
}

module.exports = new userController()