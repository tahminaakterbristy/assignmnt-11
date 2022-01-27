import logo from './logo.svg';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';

import Home from './Components/Home/Home';
import NotFound from './Components/NotFoud/NotFound';
import PlaceOrder from './Components/PlaceOrder/PlaceOrder';
import ManageAllOrder from './Components/ManageAllOrder/ManageAllOrder';
import YourOrder from './Components/YourOrder/YourOrder';
import LogIn from './Components/LogIn/LogIn';
import SingUp from './Components/SingUp/SingUp';
import Header from './Components/Header/Header';
import AuthContext from './Components/AuthContext/AuthContext';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import UploadService from './Components/UploadService/UploadService';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <AuthContext>
      <BrowserRouter>
      <Header></Header>

      <Switch>

        <Route exact path='/'>
          <Home></Home>
        </Route>

        <Route exact path='/home'>
          <Home></Home>
        </Route>


        <PrivateRoute exact path='/placeorder/:id'>
        <PlaceOrder></PlaceOrder>
        </PrivateRoute>


        <PrivateRoute  path='/manage-all-orders'>
        <ManageAllOrder></ManageAllOrder>
        </PrivateRoute>

        {/* <Route>

         

        </Route> */}


        <PrivateRoute path='/your-orders'>
          <YourOrder></YourOrder>
        </PrivateRoute>


        <Route path='/login'>
          <LogIn></LogIn>
        </Route>


        <Route path='/register'>
          <SingUp></SingUp>
        </Route>

        <PrivateRoute path='/upload-service'>
          <UploadService></UploadService>

        </PrivateRoute>
        

































        <Route path='*'>
          <NotFound></NotFound>
        </Route>



























      </Switch>










        <Footer></Footer>

    </BrowserRouter>
    </AuthContext>
  );
}

export default App;
