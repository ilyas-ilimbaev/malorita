import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Context } from '..';
import { Image } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { REST_ROUTE } from "../utils/consts";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Scrollbar, FreeMode } from 'swiper/modules';

// Импортируем стили Swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import 'swiper/css/free-mode';

const TypeBar = observer(() => {
    const { menuitem } = useContext(Context);
    const navigate = useNavigate();

    const Menu = () => {
        menuitem.setSelectedType({});
        navigate(REST_ROUTE);
    };

    return (
        <div className="d-flex flex-col row">
            <button className='menuBtn' onClick={Menu}>Меню</button>
            
            <Swiper
                modules={[Navigation, Scrollbar, FreeMode]}
                spaceBetween={20}
                slidesPerView={'auto'}
                freeMode={true}
                navigation
                className="types-swiper"
            >
                {menuitem.types.map(type => (
                    <SwiperSlide key={type.id} className={`customList-item ${type.id === menuitem.selectedType.id ? 'active' : ''}`}
                            onClick={() => menuitem.setSelectedType(type)}
                            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#e9ecef'}
                            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = ''}
                        >
                        <span>{type.name}</span>
                        <div className='menuListItem-img'>
                            <Image
                                src={`${process.env.REACT_APP_API_URL}/typeImages/${type.img}`}
                                alt={type.name}
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
});

export default TypeBar;