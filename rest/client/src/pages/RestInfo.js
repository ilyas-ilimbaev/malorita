import React, { useContext, useState } from 'react';
import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap';
import CreateReview from '../components/modals/CreateReview';
import GetReviews from '../components/modals/GetReviews';
import info from '../assets/info.jpg'
import { Context } from '..';

const RestInfo = () => {
    const [reviewVisible, setReviewVisible] = useState(false);
    const [getReviewVisible, setGetReviewVisible] = useState(false);
    const { user } = useContext(Context);

    const restinfo = {
        id: 1,
        name: "Калi ласка",
        address: "ул. Лермонтова д. 11/А",
        email: "malorita@mail.ru",
        phone: "+375298446589",
        description: "Лучший ресторан Брестской области, в котором вы сможете попробовать то, от чего вы будете в восторге!"
    };

    return (
        <Container className='customWrap'>
            <Card className='about flex-row justify-content-between'>
                <Col md={4} className='about-text'>
                    <h1 className='about-title'><span>Ресторан </span>{restinfo.name}</h1>
                    <Card.Text className='text-muted mt-4'>
                        <span> {restinfo.description}</span>
                    </Card.Text>
                    <div className='d-flex mt-4'>
                        <Button
                            variant='outline-primary'
                            onClick={() => {
                                if (!user.isAuth) {
                                    alert("Пожалуйста, авторизуйтесь для создания отзыва.");
                                    return;
                                } else setReviewVisible(true)
                            }}
                            className='me-2 leave'
                        >
                            Оставить отзыв
                        </Button>
                        <Button
                            variant='outline-primary'
                            onClick={() => setGetReviewVisible(true)}
                            className='more'
                        >
                            Посмотреть все отзывы
                        </Button>
                    </div>
                </Col>
                <Col md={5} className='d-flex about-img'> {/* Добавлены внутренние отступы */}
                    <Image
                        src={info}
                        alt='Калi ласка'
                        className='img-fluid rounded-start'
                    />
                </Col>
            </Card>

            <Row className='g-0 justify-content-center gap-4 cardInfo-wrap'>
                <Col className='cardInfo'>
                    <Card.Link href='https://yandex.ru/maps/-/CHGCYZlP' target='_blank'>

                        <Card.Text className='text-muted'>
                            <svg viewBox="0 -16 512 512" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="m437 60h-15v60h-62.078125c.703125-4.929688 1.078125-9.933594 1.078125-15 0-57.898438-47.101562-105-105-105s-105 47.101562-105 105c0 5.066406.375 10.070312 1.078125 15h-62.078125v-60h-15c-41.355469 0-75 33.644531-75 75v285c0 33.085938 26.914062 60 60 60h392c33.085938 0 60-26.914062 60-60v-285c0-41.355469-33.644531-75-75-75zm-86.117188 90h71.117188v98.757812l-24.28125 24.128907-86.152344-67.003907 28.488282-38.011718c4.234374-5.648438 7.847656-11.628906 10.828124-17.871094zm-48.730468 300h-190.722656l83.664062-82.960938zm-170.632813-170.179688 71.386719-70.640624 53.09375 70.828124 37.570312-50.117187 82.691407 64.316406-99.097657 98.472657zm124.480469-249.820312c41.355469 0 75 33.644531 75 75 0 16.3125-5.167969 31.832031-14.949219 44.878906l-60.050781 80.113282-60.050781-80.113282c-9.78125-13.046875-14.949219-28.566406-14.949219-44.878906 0-41.355469 33.644531-75 75-75zm-94.882812 120c2.976562 6.242188 6.59375 12.222656 10.824218 17.871094l12.800782 17.074218-77.140626 76.339844-17.601562-13.636718v-97.648438zm-131.117188-15c0-19.554688 12.539062-36.238281 30-42.429688v267.429688c-10.921875 0-21.171875 2.933594-30 8.050781zm0 285c0-16.542969 13.457031-30 30-30h30v-104.398438l81.179688 62.902344-102.355469 101.496094h-8.824219c-16.542969 0-30-13.457031-30-30zm422 30h-100.867188l-50.054687-38.789062 120.921875-120.160157v98.949219h30c16.542969 0 30 13.457031 30 30s-13.457031 30-30 30zm30-81.949219c-8.828125-5.117187-19.078125-8.050781-30-8.050781v-267.429688c17.460938 6.191407 30 22.871094 30 42.429688zm0 0"
                                    fill="#26643b"
                                />
                                <path
                                    d="m256 150c24.8125 0 45-20.1875 45-45s-20.1875-45-45-45-45 20.1875-45 45 20.1875 45 45 45zm0-60c8.269531 0 15 6.730469 15 15s-6.730469 15-15 15-15-6.730469-15-15 6.730469-15 15-15zm0 0"
                                    fill="#26643b"
                                />
                            </svg>
                        </Card.Text>
                        <Card.Text className='text-muted'>
                            <strong>{restinfo.address}</strong>
                            <span>Адрес</span>
                        </Card.Text>
                    </Card.Link>
                </Col>
                <Col className='cardInfo'>
                    <Card.Link href='mailto:malorita@mail.ru'>
                        <Card.Text className='text-muted'>
                            <svg width="454" height="454" viewBox="0 0 454 454" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_10018_123)">
                                    <path d="M450.062 190.958L450.063 190.957L392.239 152.622V24.4883C392.239 20.3463 388.881 16.9883 384.739 16.9883H69.2491C65.1071 16.9883 61.7491 20.3463 61.7491 24.4883V152.631L3.9351 190.957L3.9361 190.959C1.9141 192.302 0.579102 194.598 0.579102 197.208V429.468C0.579102 433.61 3.9371 436.968 8.0791 436.968H445.919C450.061 436.968 453.419 433.61 453.419 429.468V197.208C453.419 194.598 452.084 192.302 450.062 190.958ZM61.7491 217.187L38.2241 204.708H61.7491V217.187ZM15.5791 209.676L188.054 301.166L15.5791 415.493V209.676ZM226.996 293.347L421.033 421.968H32.9601L226.996 293.347ZM265.941 301.167L438.418 209.676V415.497L265.941 301.167ZM392.239 204.708H415.775L392.239 217.192V204.708ZM421.033 189.708H392.239V170.618L421.033 189.708ZM377.239 31.9883V225.149L251.712 291.735L231.139 278.098C228.628 276.433 225.363 276.433 222.852 278.098L202.282 291.733L76.7491 225.144V31.9883H377.239ZM61.7491 189.708H32.9671L61.7491 170.628V189.708Z" fill="#26643B" stroke="#26643B" stroke-width="10" />
                                    <path d="M226.994 214.23H286.748C290.89 214.23 294.248 210.872 294.248 206.73C294.248 202.588 290.89 199.23 286.748 199.23H226.994C198.181 199.23 174.74 175.789 174.74 146.976V144.763C174.74 115.95 198.181 92.5088 226.994 92.5088C255.807 92.5088 279.248 115.95 279.248 144.763V150.296C279.248 156.533 274.174 161.608 267.936 161.608C261.698 161.608 256.624 156.534 256.624 150.296V139.784C256.624 121.92 242.091 107.386 224.227 107.386C206.363 107.386 191.83 121.919 191.83 139.784C191.83 157.648 206.363 172.181 224.227 172.181C232.396 172.181 239.863 169.136 245.567 164.129C250.211 171.612 258.499 176.607 267.936 176.607C282.444 176.607 294.248 164.804 294.248 150.295V144.762C294.248 107.678 264.078 77.5078 226.994 77.5078C189.91 77.5078 159.74 107.678 159.74 144.762V146.975C159.74 184.06 189.91 214.23 226.994 214.23ZM224.227 157.181C214.634 157.181 206.83 149.377 206.83 139.784C206.83 130.191 214.635 122.386 224.227 122.386C233.819 122.386 241.624 130.191 241.624 139.784C241.624 149.377 233.82 157.181 224.227 157.181Z" fill="#26643B" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_10018_123">
                                        <rect width="452.84" height="452.84" fill="white" transform="translate(0.579102 0.558594)" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </Card.Text>
                        <Card.Text className='text-muted'>
                            <strong>{restinfo.email}</strong>
                            <span>Email</span>
                        </Card.Text>
                    </Card.Link>
                </Col>
                <Col className='cardInfo'>
                    <Card.Link href='tel:+375298446589'>
                        <Card.Text className='text-muted'>
                            <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                                <path d="m132.9 379.1c43.917 43.916 93.625 80.781 151.965 112.7 24.592 13.455 50.237 20.234 75.867 20.234a148.57 148.57 0 0 0 47.761-7.969c36.726-12.418 70.278-39.429 94.476-76.058 16.673-25.243 6.082-40.884.754-46.438l-68.854-71.769c-13.169-13.726-34.161-16.388-51.043-6.476a370.56 370.56 0 0 1 -69.98 31.818 21.286 21.286 0 0 0 -2.156.855c-2.525.292-12.069-1.4-29.643-12.455-15.906-10-34.151-25-51.372-42.221s-32.217-35.466-42.221-51.372c-11.054-17.57-12.736-27.106-12.454-29.639a21.286 21.286 0 0 0 .855-2.156 370.523 370.523 0 0 1 31.818-69.979c9.912-16.885 7.249-37.875-6.477-51.045l-71.767-68.855c-5.554-5.326-21.194-15.92-46.438.756-36.628 24.197-63.639 57.749-76.057 94.475-13.834 40.922-9.596 83.672 12.266 123.628 31.92 58.34 68.785 108.048 112.7 151.966zm272.262-39.592 62.738 65.392a170.936 170.936 0 0 1 -11.6 15.541 791.523 791.523 0 0 0 -66.646-72.281q7.81-4.143 15.433-8.608c.027-.019.052-.032.076-.045zm-232.67-232.67c-.013.024-.026.049-.042.075q-4.5 7.669-8.666 15.543a778.9 778.9 0 0 0 -72.1-66.862 170.807 170.807 0 0 1 15.416-11.494zm-109.292-20.277a736.042 736.042 0 0 1 81.552 77.113q-3.939 9.938-7.358 20.061c-17.517 39.921 38.447 102.152 63.584 127.289s87.367 81.1 127.289 63.584q10.217-3.447 20.256-7.437a748.679 748.679 0 0 1 76.77 81.729c-32.348 22.285-74.393 31.158-120.267 6.057-107.854-59.014-188.969-140.129-247.981-247.983-25.139-45.946-16.204-88.047 6.155-120.413zm391.43-29.19a194.857 194.857 0 0 1 57.37 138.717 21 21 0 1 1 -42 0 153.876 153.876 0 0 0 -154.089-154.088 21 21 0 0 1 0-42 194.849 194.849 0 0 1 138.717 57.371zm-95.63 95.629a92.629 92.629 0 0 0 -65.959-27.245 21 21 0 0 1 0-42 135.019 135.019 0 0 1 135.2 135.2 21 21 0 0 1 -42 0 92.629 92.629 0 0 0 -27.241-65.955zm-29.158 30.116a21.006 21.006 0 1 1 -29.7-.943l.015-.015a21 21 0 0 1 29.687.956z" fill="#26643b"></path></svg>
                        </Card.Text>
                        <Card.Text className='text-muted'>
                            <strong>{restinfo.phone}</strong>
                            <span>Телефон</span>
                        </Card.Text>
                    </Card.Link>
                </Col>
            </Row>
            <CreateReview show={reviewVisible} onHide={() => setReviewVisible(false)} />
            <GetReviews show={getReviewVisible} onHide={() => setGetReviewVisible(false)} />
        </Container>
    );
};

export default RestInfo;
