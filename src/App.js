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

export const PlaceName = createContext();
export const StayingDate = createContext();

function App() {
  const [place, setPlace] = useState("coxsbazar");
  const [date, setDate] = useState(0);
  return (
    <div className="App">
      <PlaceName.Provider value={[place, setPlace]}>
      <StayingDate.Provider value={[date, setDate]}>
        <Router>
          <Switch>
            <Route exact path="/" >
              <div className="bgStyle">
            <Header></Header>
              <Main></Main>
              </div>
            </Route>
            <Route path="/booking">
            <Header></Header>
              <Booking></Booking>
            </Route>
            <Route path="/search">
            
              <Header></Header>
              <Search></Search>
              
            </Route>
          </Switch>
        </Router>
        </StayingDate.Provider>
      </PlaceName.Provider>
    </div>
  );
}

export default App;
