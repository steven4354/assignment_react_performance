import React, {Component} from "react";

//connecting to the store
import {connect} from "react-redux";

//import custom component
import Portfolio from "../components/Portfolio";

//creating our own container
class PortfolioContainer extends Component {
  constructor(props) {
    super();
  }

  render() {
    const {transactions, stocks} = this.props;
    return <Portfolio transactions={transactions} stocks={stocks} />;
  }
}

//getting the store state to containers props

const mapStateToProps = state => {
  return {
    transactions: state.stockTransactionsReducer.transactions,
    stocks: state.initialStocksReducer.stocks
  };
};

//connecting to the store
export default connect(mapStateToProps, null)(PortfolioContainer);
