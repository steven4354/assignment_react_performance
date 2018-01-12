// reg component
import React, {Component} from "react";

//getting some Links to use
import {Link} from "react-router-dom";

//adding some bootstrap
import "bootstrap/dist/css/bootstrap.css";

class List extends Component {
  constructor(props) {
    super();
  }

  componentDidMount() {
    const {getInitialStocks, stocks} = this.props;

    getInitialStocks(stocks);
  }

  render() {
    console.log("stock component has rendered");
    const {stocks} = this.props;
    let key = 0;

    console.log("stocks =>", stocks);
    return (
      <div>
        <div className="card text-center">
          <div className="card-header">Stocks Data</div>
          <div className="card-block">
            <table className="table table-striped table-dark">
              <thead>
                <tr>
                  <th scope="col">Symbol</th>
                  <th scope="col">Price</th>
                  <th scope="col">1day</th>
                  <th scope="col">7day</th>
                  <th scope="col">30day</th>
                  <th scope="col">Trade?</th>
                </tr>
              </thead>
              <tbody>
                {stocks.map(stock => {
                  return (
                    <tr key={key++} style={{textAlign: "left"}}>
                      <td>{stock.name}</td>
                      <td>${Math.floor(stock.dates[0].closing, 10)}</td>
                      <td>
                        {Math.trunc(
                          (stock.dates[0].closing - stock.dates[1].closing) * 10
                        ) / 10}
                      </td>
                      <td>
                        {Math.trunc(
                          (stock.dates[0].closing - stock.dates[6].closing) * 10
                        ) / 10}
                      </td>
                      <td>
                        {Math.trunc(
                          (stock.dates[0].closing -
                            stock.dates[stock.dates.length - 1].closing) *
                            10
                        ) / 10}
                      </td>
                      <td>
                        <Link to={{pathname: "/trade", state: {stock}}}>
                          {" "}
                          trade{" "}
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <div className="card-footer text-muted">
            Data pulled from Quandl API
          </div>
        </div>
      </div>
    );
  }
}

export default List;
