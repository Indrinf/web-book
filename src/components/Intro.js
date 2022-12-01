import { Row, Container, Col, Button } from 'react-bootstrap';

const Intro = () => {
    return(
        <div className='intro'>
          <Container className='d-flex text-center justify-content-center align-item-center'>
            <Row>
              <Col>
                <div className='quotes'>Books are the quietest and most constant of friends</div>
                <div className='introButton mt-4 text-center'>
                    <Button variant='dark' href='#novel'>Lihat semua list</Button>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
    )
}

export default Intro;