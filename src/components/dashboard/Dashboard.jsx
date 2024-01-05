import React from "react";
import "./dashboard.css";
import { Link } from "react-router-dom";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';


const Dashboard = () => {
    ChartJS.register(ArcElement, Tooltip, Legend);
    const data = {
        labels: [],
        datasets: [
          {
            label: '# of Votes',
            data: [50,50],
            backgroundColor: [
              'rgb(248,177,177)',
              'rgb(255,146,109)',
            
            ],
            borderColor: [ 
                 'rgb(248,177,177)',
              'rgb(255,146,109)',
            
            
            ],
            borderWidth: 1,
          },
        ],
      };
  return (
    <div className="dashmain">
      <h3>Dashboard</h3>
      <div className="carddiv">
        <div className="colordiv">
          Today sales
          <p>
            500{" "}
            <p
              style={{
                fontWeight: "400",
                fontSize: "12px",
                marginLeft: "5px",
                marginTop: "5px",
              }}
            >
              Rs
            </p>
          </p>
          42 sales
        </div>
        <div className="normalcard" style={{ marginLeft: "10px" }}>
          {" "}
          Today sales
          <p>
            500{" "}
            <p
              style={{
                fontWeight: "400",
                fontSize: "12px",
                marginLeft: "5px",
                marginTop: "5px",
              }}
            >
              Rs
            </p>
          </p>
          42 sales
        </div>
      </div>
      <div className="carddiv">
        <div className="normalcard">
          Today sales
          <p>
            500{" "}
            <p
              style={{
                fontWeight: "400",
                fontSize: "12px",
                marginLeft: "5px",
                marginTop: "5px",
              }}
            >
              Rs
            </p>
          </p>
          42 sales
        </div>
        <div className="normalcard" style={{ marginLeft: "10px" }}>
          {" "}
          Today sales
          <p>
            500{" "}
            <p
              style={{
                fontWeight: "400",
                fontSize: "12px",
                marginLeft: "5px",
                marginTop: "5px",
              }}
            >
              Rs
            </p>
          </p>
          42 sales
        </div>
      </div>
      <div className="chartdiv">
       
    
          <div className="firstpart">
            <div className="collection">Collection detais</div>
          <div className="payment">
            <div className="box1"></div>&nbsp;&nbsp;&nbsp;
            <div>Cash</div>&nbsp;&nbsp;&nbsp;
            <div className="amount">500</div>
          </div>
          <div className="payment">
            <div className="box2"></div>&nbsp;&nbsp;&nbsp;
            <div>Cash</div>&nbsp;&nbsp;&nbsp;
            <div className="amount">500</div>
          </div>
        </div>
        <div className="secondpart">
            <div className="circleshadow">
            <Doughnut data={data} className="chart"/>
            </div>
        </div>
      </div>
      <div className="buttondiv1">
        <Link to='/sales'><button className="buttonsales">Sales</button></Link>
        <button className="buttonactivation">Activation</button>
      </div>
    </div>
  );
};

export default Dashboard;
