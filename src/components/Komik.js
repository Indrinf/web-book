import { Card, Container, Row, Col, Image, Button, Modal } from 'react-bootstrap';
import hanakoImage from '../assets/images/komik/hanako.jpg';
import melangkahImage from '../assets/images/novel/melangkah.jpg';
import kopiImage from '../assets/images/novel/secangkir-kopi.jpg';
import underImage from '../assets/images/novel/under.jpg';
import arcadiaImage from '../assets/images/novel/Arcadia.jpg';
import watersongImage from '../assets/images/novel/Watersong.jpg';


const Komik = () => {
    return (
        <Container>
            <br />
            <h1 className='text-white'>KOMIK</h1>
            <br />
            <Row>
                <Col md={4} className="bookWrapper" id='komik'>
                    <Card className="bookImage">
                        <Image src={hanakoImage} alt="Home Book" className='images' />
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

export default Komik;