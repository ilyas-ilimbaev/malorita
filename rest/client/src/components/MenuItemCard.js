import React from 'react';
import { Col, Card } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import { useNavigate } from 'react-router-dom';
import { MENUITEM_ROUTE } from '../utils/consts';

const MenuItemCard = ({ menuitem }) => {
    const navigate = useNavigate();

    // Добавляем защитные проверки
    const safeDescription = menuitem?.description || ''; // Если description отсутствует, используем пустую строку
    const truncatedDescription = safeDescription.slice(0, 20) + (safeDescription.length > 20 ? "..." : "");

    return (
        <Card
            border="light"
            onClick={() => navigate(MENUITEM_ROUTE + '/' + menuitem.id)}
            className="shadow-sm d-flex flex-column align-items-center menuCard"
        >
            <Image
                height={200}
                src={process.env.REACT_APP_API_URL + menuitem.image}
                alt={menuitem.name}
                style={{ width: '100%', height: '200px', flexShrink: '0', objectFit: 'cover', borderRadius: '10px 10px 0 0'}} 
            />
            <div className='menuCard-text'>
                <h3 className='text-center'>{menuitem.name}</h3>
                <div className='text-black-50 fs-6'>
                    <p>{truncatedDescription}</p>
                </div>
            </div>
        </Card>
    );
};

export default MenuItemCard;