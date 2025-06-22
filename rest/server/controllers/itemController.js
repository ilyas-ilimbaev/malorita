const db = require('../db')
const uuid = require('uuid')
const path = require('path')

class itemController{
    async create(req, res) {
        const {name, price, typeId, description, availability} = req.body    
    
        if (!name || !price || !typeId) {
            return res.status(400).json({ message: 'Не все обязательные поля заполнены' })
        }
    
        const {image} = req.files
        const fileName = uuid.v4() + ".jpg"
        const filePath = path.resolve(__dirname, '..', 'static', fileName)
    
        image.mv(filePath)
    
        const insertMenuItemQuery = `
            INSERT INTO MenuItem (name, price, image, type_id, description, availability)
            VALUES ($1, $2, $3, $4, $5, $6)
            RETURNING id, name, price, image, type_id, description, availability;`
    
        const menuItem = await db.query(insertMenuItemQuery, [
            name,
            price,
            fileName,
            typeId,
            description || null,
            availability !== undefined ? availability : true
        ])
    
        return res.json(menuItem.rows[0])
    
    }
    
    

    async getAll(req, res) {
        const {id, typeId} = req.query
        let getAllMenuItemsQuery
        let queryParams = []
        let menuItems;
        
            if (!id && !typeId) {
                getAllMenuItemsQuery = `
                    SELECT id, name, price, image, type_id, description, availability 
                    FROM MenuItem;
                `
                
            } else if (id && !typeId) {
                getAllMenuItemsQuery = `
                    SELECT * 
                    FROM MenuItem
                    WHERE id = $1;
                `
                queryParams = [id]
            }
            else if (!id && typeId) {
                getAllMenuItemsQuery = `
                    SELECT * 
                    FROM MenuItem
                    WHERE type_id = $1 
                `
                queryParams = [typeId]
            }
            else {
                getAllMenuItemsQuery = `
                SELECT * 
                FROM MenuItem
                WHERE type_id = $1 and id = $2;
            `
            queryParams = [typeId, id]
            }
        

            if (queryParams.length > 0) {
                menuItems = await db.query(getAllMenuItemsQuery, queryParams)
            } else {
                menuItems = await db.query(getAllMenuItemsQuery)
            }

        return res.json(menuItems.rows)
    }
    

    async getOne(req, res) {
        const { id } = req.params; 
    
        if (!id) {
            return res.status(400).json({ message: 'ID не указан' })
        }
    
        const getMenuItemQuery = `
            SELECT * FROM menuItem 
            WHERE id = $1;
        `;
        const menuItem = await db.query(getMenuItemQuery, [id]);
    
        if (menuItem.rows.length === 0) {
            return res.status(404).json({ message: 'Пункт меню с указанным ID не найден' })
        }
    
        return res.json(menuItem.rows[0]); 
    }

    async deleteOne(req, res) {
        const { id } = req.params
    
        if (!id) {
            return res.status(400).json({ message: 'ID пункта меню не указан' })
        }
    
        const deleteItemQuery = `
            DELETE FROM menuItem 
            WHERE id = $1
            RETURNING id;
        `
    
        const deleteItem = await db.query(deleteItemQuery, [id])
    
        if (deleteItem.rows.length === 0) {
            return res.status(404).json({ message: 'Пункт меню не найден' })
        }

        return res.json({ message: 'Пункт меню успешно удален' })
    }

    

    
}

module.exports = new itemController()