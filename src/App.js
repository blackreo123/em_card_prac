
/* eslint-disable */
import Main from './components/Main';
import { Navbar, Nav, NavDropdown} from 'react-bootstrap';
import { Link, Route, Switch} from 'react-router-dom';
import SignUp from './components/SignUp';
import Detail from './components/Detail';


function App() {
  
  return (
    <div className="App">
      <Navbar bg="light" expand="lg" >
        <Navbar.Brand onClick={()=>{window.location.replace("/")}}>AIS</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
         <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link onClick={()=>{window.location.replace("/")}}>一覧 </Nav.Link>
            <Nav.Link as={Link} to="/signUp">新規登録</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Switch>
        <Route exact path='/'>
          <Main></Main>
        </Route>
        <Route exact path='/signUp'>
          <SignUp></SignUp>
        </Route>
        <Route exact path='/detail' component={Detail}>
          {/* <Detail></Detail> */}
        </Route>
      </Switch>
      
    </div>
  );
}

export default App;
