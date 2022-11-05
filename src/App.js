// import logo from './logo.svg';
import './App.css';
import {Container, Nav, Navbar} from 'react-bootstrap';

import { Link, Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      {/* <header>
        demo nhom 11
      </header> */}
      {/* <nav style={{borderBottom: '1px solid', paddingBottom: '1rem'}}>
        <Link to='/home'>page 1</Link> | {' '}
        <Link to='/setting'> page 2</Link> | {' '}
        <Link to='/profile'> page 3</Link>
      </nav> */}

<Navbar style={{backgroundColor: '#FF9933'}} expand="lg">
      <Container >
        <Navbar.Brand href="/home">DEMO REACTJS</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto justify-content-center">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/setting">Conntact</Nav.Link>
            <Nav.Link href="/profile/snufkin">About Us</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

      <Outlet/>

      <div> footer </div>
    </div>
  );
}

export default App;
