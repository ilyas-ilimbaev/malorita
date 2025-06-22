const db = require('../db')
const path = require('path')
const fs = require('fs')

class TypeController {
    async create(req, res) {
        try {
            const { name } = req.body
            const img = req.files?.img

            if (!name) {
                return res.status(400).json({ message: 'Название типа не указано' })
            }

            let imgPath = null
            if (img) {
                const uploadDir = path.join(__dirname, '..', 'static', 'typeImages')
                
                // Создаем директорию, если ее нет
                if (!fs.existsSync(uploadDir)) {
                    fs.mkdirSync(uploadDir, { recursive: true })
                }

                // Генерируем уникальное имя файла
                const fileName = Date.now() + '-' + img.name
                const fullPath = path.join(uploadDir, fileName)
                
                // Сохраняем файл
                await img.mv(fullPath)
                imgPath = fileName // или полный путь, в зависимости от вашей структуры
            }

            const createTypeQuery = `
                INSERT INTO typeItem (name, img) 
                VALUES ($1, $2) 
                RETURNING id, name, img;
            `
            const type = await db.query(createTypeQuery, [name, imgPath])

            return res.json(type.rows[0])
        } catch (e) {
            console.error(e)
            return res.status(500).json({ message: 'Ошибка при создании типа' })
        }
    }

    async getOne(req, res) {
        const { id } = req.params
    
        if (!id) {
            return res.status(400).json({ message: 'ID не указан' })
        }
    
        const getTypeQuery = `
            SELECT * FROM typeItem 
            WHERE id = $1;
        `
        const type = await db.query(getTypeQuery, [id])
    
        if (type.rows.length === 0) {
            return res.status(404).json({ message: 'Тип с указанным ID не найден' })
        }
    
        return res.json(type.rows[0])
    }
    
    async getAll(req, res) {
        const showAllTypeQuery = `
            SELECT * FROM typeItem;
        `
        const types = await db.query(showAllTypeQuery)
        return res.json(types.rows)
    }

    async deleteOne(req, res) {
        const { id } = req.params
    
        if (!id) {
            return res.status(400).json({ message: 'ID типа не указан' })
        }
    
        // Сначала получаем информацию о типе, чтобы удалить изображение
        const getTypeQuery = `SELECT img FROM typeItem WHERE id = $1`
        const type = await db.query(getTypeQuery, [id])
        
        if (type.rows.length === 0) {
            return res.status(404).json({ message: 'Тип не найден' })
        }

        // Удаляем изображение, если оно есть
        if (type.rows[0].img) {
            const imgPath = path.join(__dirname, '..', 'static', 'typeImages', type.rows[0].img)
            if (fs.existsSync(imgPath)) {
                fs.unlinkSync(imgPath)
            }
        }

        const deleteTypeQuery = `
            DELETE FROM typeItem 
            WHERE id = $1
            RETURNING id;
        `
    
        const deleteType = await db.query(deleteTypeQuery, [id])
    
        return res.json({ message: 'Тип успешно удален' })
    }
}

module.exports = new TypeController()