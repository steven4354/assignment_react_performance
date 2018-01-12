import React from "react";
import PieChart from "react-minimal-pie-chart";

const Chart = () => {
  return (
    <div>
      <h3 style={{textAlign: "center", marginBottom: "40px", marginTop: "5px"}}>
        Your Portfolio
      </h3>
      <div>
        <PieChart
          data={[
            {value: 10, key: 1, color: "#E38627"},
            {value: 15, key: 2, color: "#C13C37"},
            {value: 20, key: 3, color: "#6A2135"}
          ]}
          style={{marginLeft: "270px", height: "500px", width: "500px"}}
        />
      </div>
      <ul style={{marginTop: "50px"}}>
        <li style={{color: "#E38627", textAlign: "left", marginLeft: "470px"}}>
          {" "}
          AAPL{" "}
        </li>
        <li style={{color: "#C13C37", textAlign: "left", marginLeft: "470px"}}>
          {" "}
          MSFT{" "}
        </li>
        <li style={{color: "#6A2135", textAlign: "left", marginLeft: "470px"}}>
          {" "}
          INTC{" "}
        </li>
      </ul>
    </div>
  );
};

export default Chart;
