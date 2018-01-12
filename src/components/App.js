import React, {Component} from "react";
// import logo from "../logo.svg";
import "./App.css";

//custom containers
import StockDataContainer from "../containers/StockDataContainer";
import TradeContainer from "../containers/TradeContainer";
import TransactionsContainer from "../containers/TransactionsContainer";
import PortfolioContainer from "../containers/PortfolioContainer";
import Chart from "./Chart";

//adding some bootstrap
import "bootstrap/dist/css/bootstrap.css";

//for the router
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <nav className="navbar navbar-light bg-faded">
            <h1>
              <a className="navbar-brand" href="/">
                <img
                  src="https://upload.wikimedia.org/wikipedia/en/thumb/1/10/Stratton_Oakmont_logo.svg/1200px-Stratton_Oakmont_logo.svg.png"
                  style={{height: "50px", width: "50px", marginRight: "10px"}}
                  alt="lion"
                />{" "}
                FidelGuard Stock Portfolio Simulator
              </a>{" "}
            </h1>
          </nav>
          <div className="App container-fluid">
            <div className="row">
              <div className="col-xl-4" style={{marginTop: "20px"}}>
                <StockDataContainer />
              </div>
              <div className="col-xl-8" style={{marginTop: "20px"}}>
                <Switch>
                  <Route exact path="/trade" component={TradeContainer} />
                  <Route
                    exact
                    path="/portfolio"
                    component={PortfolioContainer}
                  />
                  <Route exact path="/" component={PortfolioContainer} />
                  <Route
                    exact
                    path="/transactions"
                    component={TransactionsContainer}
                  />
                  <Route exact path="/chart" component={Chart} />
                </Switch>
              </div>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;

//old app components
/*<header className="App-header">
<img src={logo} className="App-logo" alt="logo" />
<h1 className="App-title">Welcome to React</h1>
</header>
<p className="App-intro">
To get started, edit <code>src/App.js</code> and save to reload.
</p>*/
