import {Navbar, Nav, Container, } from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';

const Header = () => {
  return (
    <div>
        <Navbar bg="dark" variant="dark" collapseOnSelect expand="lg">
        <Container>
            <LinkContainer to="/">
              <Navbar.Brand>Proshop</Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
                <LinkContainer to="cart">
                  <Nav.Link ><i className="fas fa-shopping-cart"></i>Cart</Nav.Link>
                </LinkContainer>
                
                <LinkContainer to="/login">
                  <Nav.Link><i className="fas fa-user"></i>Sign in</Nav.Link>
                </LinkContainer>
            </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    </div>
  )
}

export default Header