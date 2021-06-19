import React, { useState, useEffect } from "react";
import "./App.css";
import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";


// Components
import Home from "./components/Home";
import Navigation from "./components/Navigation";
import Stormwater from "./components/Stormwater";
import Cad from "./components/Cad";
import Overflow from "./components/Overflow";
import Testimonial from "./components/Testimonial";
import Contact from "./components/Contact";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navigation />
      <Router>
        <Switch>
          <Route exact path ="/" component={Home}></Route>
          <Route path="/stormwater" component={Stormwater}></Route>
          <Route path="/overflow" component={Overflow}></Route>
          <Route path="/cad" component={Cad}></Route>
          <Route path="/testimonial" component={Testimonial}></Route>
          <Route path="/contact" component={Contact}></Route>
        </Switch>
      </Router>
      <br />
      {/* <AmplifySignOut /> */}
    </div>
  );
}

// export default withAuthenticator(App);
export default App;