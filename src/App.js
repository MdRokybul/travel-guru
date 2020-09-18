import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import Booking from './Components/Booking/Booking';
import Search from './Components/Search/Search';
import Login from './Components/Login/Login';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';

export const PlaceName = createContext();
export const StayingDate = createContext();
export const UserContext = createContext();

function App() {
  const [place, setPlace] = useState("coxsbazar");
  const [date, setDate] = useState(0);
  const [user, setUser] = useState({})
  return (
    <div className="App">
      <PlaceName.Provider value={[place, setPlace]}>
        <StayingDate.Provider value={[date, setDate]}>
          <UserContext.Provider value={[user, setUser]}>
            <Router>
            <Header></Header>
              <Switch>
                <Route exact path="/" >
                    <Main></Main>
                </Route>
                <Route path="/booking">
                  <Booking></Booking>
                </Route>
                <PrivateRoute path="/search" children>
                  <Search></Search>
                </PrivateRoute>
                <Route path="/login">
                  <Login></Login>
                </Route>
              </Switch>
            </Router>
          </UserContext.Provider>
        </StayingDate.Provider>
      </PlaceName.Provider>
    </div>
  );
}

export default App;
