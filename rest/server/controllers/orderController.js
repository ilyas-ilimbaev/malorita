const db = require('../db')


class orderController {
    async create(req, res) {
        const { user_id, type, order_status } = req.body

        if (!user_id || !type || !order_status) {
            return res.status(400).json({ message: 'Не все обязательные поля заполнены' })
        }



        const insertOrderQuery = `
            INSERT INTO Orders (user_id, type, order_status)
            VALUES ($1, $2, $3)
            RETURNING id, user_id, type, order_status;`

        const order = await db.query(insertOrderQuery, [user_id, type, order_status])

        return res.json(order.rows[0])

    }

    async addMenuItem(req, res) {
        const { order_id } = req.params
        const { menuitem_id } = req.body

        if (!menuitem_id || !order_id) {
            return res.status(400).json({ message: 'Не все обязательные поля заполнены' })
        }



        const insertOrderItemQuery = `
            INSERT INTO order_item (menuitem_id, order_id)
            VALUES ($1, $2)
            RETURNING id, menuitem_id, order_id;`

        const addOrderItem = await db.query(insertOrderItemQuery, [menuitem_id, order_id])

        return res.json(addOrderItem.rows[0])

    }


    async deleteOne(req, res) {
        const { id } = req.params

        if (!id) {
            return res.status(400).json({ message: 'ID пункта заказа не указан' })
        }

        const deleteItemQuery = `
            DELETE FROM order_item 
            WHERE id = $1
            RETURNING id;
        `

        const deleteItem = await db.query(deleteItemQuery, [id])

        if (deleteItem.rows.length === 0) {
            return res.status(404).json({ message: 'Пункт заказа не найден' })
        }

        return res.json({ message: 'Пункт заказа успешно удален' })
    }



    async getAll(req, res) {
        const { user_id, type, order_id } = req.query
        let getOrdersQuery
        let queryParams = []
        let orders
        console.log(user_id)
        if (!user_id && !type && !order_id) {

            getOrdersQuery = `
          SELECT *
            FROM MenuItem 
            JOIN Order_Item  ON MenuItem.id = Order_Item.menuitem_id
			JOIN Orders  ON Orders.id = Order_Item.order_id
			
            
        `
        }
        else if (order_id && !user_id && !type) {

            getOrdersQuery = `
            SELECT *
            FROM MenuItem 
            JOIN Order_Item  ON MenuItem.id = Order_Item.menuitem_id
            WHERE Order_Item.order_id = $1;
        `
            queryParams = [order_id]
        }
        else if (user_id && !type) {

            getOrdersQuery = `
             SELECT *
            FROM MenuItem 
            JOIN Order_Item  ON MenuItem.id = Order_Item.menuitem_id
			JOIN Orders  ON Orders.id = Order_Item.order_id
			where  orders.user_id = $1
        `
            queryParams = [user_id]
        }
        else if (!user_id && type) {

            getOrdersQuery = `
            SELECT id, user_id, type, order_status 
            FROM Orders 
            WHERE type = $1;
        `
            queryParams = [type]
        }
        else {

            getOrdersQuery = `
            SELECT id, user_id, type, order_status 
            FROM Orders 
            WHERE user_id = $1 AND type = $2;
        `
            queryParams = [user_id, type]
        }

        if (queryParams.length > 0) {
            orders = await db.query(getOrdersQuery, queryParams)
        } else {
            orders = await db.query(getOrdersQuery)
        }

        return res.json(orders.rows)
    }


    async getOne(req, res) {
        const { id } = req.params

        if (!id) {
            return res.status(400).json({ message: 'ID не указан' })
        }

        const getOrderQuery = `
            SELECT id, user_id, type, order_status 
            FROM Orders 
            WHERE id = $1;
        `


        const order = await db.query(getOrderQuery, [id])

        if (order.rows.length === 0) {
            return res.status(404).json({ message: 'Заказ с указанным ID не найден' })
        }

        return res.json(order.rows[0])
    }

    async updateOrder(req, res) {
        const { id } = req.params
        const { order_status } = req.body
     
        if (!id) {
            return res.status(400).json({ message: 'ID заказа не указан' })
        }
    
        const updateOrder = await db.query(
            `
            UPDATE orders SET order_status = $1 WHERE id = $2 
            RETURNING id, user_id, type, order_status
            `,
            [order_status,id]
        )
    
    
        if (updateOrder.rows.length === 0) {
            return res.status(404).json({ message: 'Заказ не найден' })
        }

        return res.json({ message: 'Данные успешно изменены' })
    }



}

module.exports = new orderController()