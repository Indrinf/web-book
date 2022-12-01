import { Card, Container, Row, Col, Image, Button, Modal } from 'react-bootstrap';
import homeImage from '../assets/images/novel/home.jpg';
import melangkahImage from '../assets/images/novel/melangkah.jpg';
import kopiImage from '../assets/images/novel/secangkir-kopi.jpg';
import underImage from '../assets/images/novel/under.jpg';
import arcadiaImage from '../assets/images/novel/Arcadia.jpg';
import watersongImage from '../assets/images/novel/Watersong.jpg';
import React, { useState } from 'react';

function Novel() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <Container>
            <br />
            <h1 className='text-white'>NOVEL</h1>
            <br />
            <Row>
                <Col md={4} className="bookWrapper" id='novel'>
                    <Card className="bookImage">
                        <Image src={homeImage} alt="Home Book" className='images' />
                        <div className="bg-dark">
                            <div className="p-2 m-2 text-white">
                                <Card.Title className="text-center">HOME</Card.Title>
                                <Button variant="light" onClick={handleShow}>
                                    Detail
                                </Button>

                                <Modal show={show} onHide={handleClose}>
                                    <Modal.Header closeButton>
                                        <Modal.Title>Home</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>Test</Modal.Body>
                                    <Modal.Footer>
                                        <Button variant="secondary" onClick={handleClose}>
                                            Close
                                        </Button>
                                    </Modal.Footer>
                                </Modal>
                            </div>
                        </div>
                    </Card>
                </Col>
                <Col md={4} className="bookWrapper">
                    <Card className="bookImage">
                        <Image src={melangkahImage} alt="Home Book" className='images' />
                        <div className="bg-dark">
                            <div className="p-2 m-2 text-white">
                                <Card.Title className="text-center">HOME</Card.Title>
                                <Card.Text className="text-left">
                                    This is a wider card with supporting text below as a natural
                                </Card.Text>
                                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                            </div>
                        </div>
                    </Card>
                </Col>
                <Col md={4} className="bookWrapper">
                    <Card className="bookImage">
                        <Image src={kopiImage} alt="Home Book" className='images' />
                        <div className="bg-dark">
                            <div className="p-2 m-2 text-white">
                                <Card.Title className="text-center">HOME</Card.Title>
                                <Card.Text className="text-left">
                                    This is a wider card with supporting text below as a natural
                                </Card.Text>
                                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                            </div>
                        </div>
                    </Card>
                </Col>
                <Col md={4} className="bookWrapper">
                    <Card className="bookImage">
                        <Image src={underImage} alt="Home Book" className='images' />
                        <div className="bg-dark">
                            <div className="p-2 m-2 text-white">
                                <Card.Title className="text-center">HOME</Card.Title>
                                <Card.Text className="text-left">
                                    This is a wider card with supporting text below as a natural
                                </Card.Text>
                                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                            </div>
                        </div>
                    </Card>
                </Col>
                <Col md={4} className="bookWrapper">
                    <Card className="bookImage">
                        <Image src={arcadiaImage} alt="Home Book" className='images' />
                        <div className="bg-dark">
                            <div className="p-2 m-2 text-white">
                                <Card.Title className="text-center">HOME</Card.Title>
                                <Card.Text className="text-left">
                                    This is a wider card with supporting text below as a natural
                                </Card.Text>
                                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                            </div>
                        </div>
                    </Card>
                </Col>
                <Col md={4} className="bookWrapper">
                    <Card className="bookImage">
                        <Image src={watersongImage} alt="Home Book" className='images' />
                        <div className="bg-dark">
                            <div className="p-2 m-2 text-white">
                                <Card.Title className="text-center">HOME</Card.Title>
                                <Card.Text className="text-left">
                                    This is a wider card with supporting text below as a natural
                                </Card.Text>
                                <Card.Text className="text-left">Last updated 3 mins ago</Card.Text>
                            </div>
                        </div>
                    </Card>
                </Col>
            </Row>
        </Container>

    )
}

export default Novel;