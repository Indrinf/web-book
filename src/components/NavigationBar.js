import { Navbar, Container, Nav } from "react-bootstrap";

const NavigationBar = () => {
    return (
        <div>
            <Navbar>
                <Container className='navbar'>
                    <Navbar.Brand>BOOK HEAVEN</Navbar.Brand>
                    <Nav>
                        <Nav.Link href="#novel">NOVEL</Nav.Link>
                        <Nav.Link href="#komik">KOMIK</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
}

export default NavigationBar;