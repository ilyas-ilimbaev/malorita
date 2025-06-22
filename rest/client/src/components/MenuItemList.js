import React, { useContext } from 'react'
import { observer } from 'mobx-react-lite'
import { Context } from '..'
import Row from 'react-bootstrap/Row';
import MenuItemCard from './MenuItemCard';

const MenuItemList = observer(() => {
    const { menuitem } = useContext(Context)
    return (
        <div className='d-flex mt-5 pb-4 menuCard-list'>
            {menuitem.menuitems.map(menuitem =>
                <MenuItemCard key={menuitem.id} menuitem={menuitem} />)}
        </div>
    )
})

export default MenuItemList