

import Header from './Components/Header';
import { BrowserRouter, Route } from 'react-router-dom';
import Users from './Components/Users';
import AddUser from './Components/AddUser';
import { Col, Row } from 'react-bootstrap';
import User from './Components/User';
import Edit from './Components/Edit';
import Contact from './Pages/Contact';





function App() {
  return (
    <BrowserRouter>
    <div className="App" >
    <Header/>
    <Row>
      <Col md='6'>
      {/* <Route exact path='/all'> <Userr/></Route> <!-- avoided inorder to keep it fixed  on the page  -->*/}
      <Users/>
        </Col>
        <Col md='6'>  
   
        <Route exact path='/Edit/:id'><Edit/> </Route>
        <Route exact path='/user/:id'><User/> </Route>
        <Route exact path='/users/add' > <AddUser></AddUser></Route>
        <Route exact path='/Contact' > <Contact></Contact></Route>
        </Col>  
      </Row>
    </div>
    </BrowserRouter>
  );
}

export default App;


