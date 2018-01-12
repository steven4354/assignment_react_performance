// import React, {Component} from "react";

//connecting to the store
import {connect} from "react-redux";

//our component and actions to give it
import Trade from "../components/Trade";
import {newTransaction} from "../actions";

//for using forms
import serialize from "form-serialize";

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onSubmit: e => {
      e.preventDefault();
      const form = e.target;
      const data = serialize(form, {hash: true});
      console.log("form data =>", data);

      //checks to make sure data is submited correctly before
      //using the submission data for action dispatch
      if (
        data.symbol &&
        Number(data.quantity) !== NaN &&
        (data.transaction === "buy" || data.transaction === "sell")
      ) {
        console.log("form data correct => ", "true");
        dispatch(newTransaction(data));

        //go back to previous
        form.reset();
        // window.location.assign("/transactions");
        ownProps.history.push("/transactions"); //replaces ^^
      } else {
        alert("incorrect input");
      }
    }
  };
};

const TradeContainer = connect(null, mapDispatchToProps)(Trade);

export default TradeContainer;
