import React, {Component} from "react";

//connecting to the store
import {connect} from "react-redux";
import {bindActionCreators} from "redux";

//our component and actions to give it
import StockData from "../components/StockData";
import {getInitialStocks} from "../actions";

//creating our own container
class StockDataContainer extends Component {
  constructor(props) {
    super();
  }

  render() {
    const {getInitialStocks, stocks, isFetching} = this.props;
    return <StockData getInitialStocks={getInitialStocks} stocks={stocks} />;
  }
}

//getting the store state to containers props

const mapStateToProps = state => {
  return {
    stocks: state.initialStocksReducer.stocks
  };
};

//allowing container to access action calls
const mapDispatchToProps = dispatch => {
  const actions = {getInitialStocks};
  return bindActionCreators(actions, dispatch);
};

//connecting to the store
export default connect(mapStateToProps, mapDispatchToProps)(StockDataContainer);
