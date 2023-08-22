import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import React, { useEffect, useRef, useState } from "react";
import "./Graph.css";
import "./LearnDashboard.css";
import axios from "axios";

let tvScriptLoadingPromise;

function LearnDashboard() {
  const [selectedSymbol, setSelectedSymbol] = useState("FX:EURUSD");
  const [selectedSymbol2, setSelectedSymbol2] = useState("FX:EURUSD");
  //const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Get the token from localStorage
    const jwtCookie = localStorage.getItem("jwt");
    axios
      .get("http://localhost:4337/checkAuthentication", {
        headers: {
          Authorization: `Bearer ${jwtCookie}`,
        },
      })
      .then((response) => {
        console.log(response.data.status);
        // If the response status is "ok", the user is authenticated
        if (response.data.status != "ok") {
          //setIsLoggedIn(true);
          window.location.href = "/pages/authentication/sign-in";
        }
      })
      .catch((error) => {
        console.error("Error checking authentication:", error);
        //setIsLoggedIn(false);
        window.location.href = "/pages/authentication/sign-in";
      });
  }, []);

  const onLoadScriptRef = useRef();

  useEffect(() => {
    onLoadScriptRef.current = createWidget;

    if (!tvScriptLoadingPromise) {
      tvScriptLoadingPromise = new Promise((resolve) => {
        const script = document.createElement("script");
        script.id = "tradingview-widget-loading-script";
        script.src = "https://s3.tradingview.com/tv.js";
        script.type = "text/javascript";
        script.onload = resolve;

        document.head.appendChild(script);
      });
    }

    tvScriptLoadingPromise.then(() => onLoadScriptRef.current && onLoadScriptRef.current());

    return () => (onLoadScriptRef.current = null);
  }, []);

  useEffect(() => {
    // Whenever the selectedSymbol changes, update the TradingView widget
    createWidget();
  }, [selectedSymbol]);

  function createWidget() {
    if (document.getElementById("tradingview_89d4a") && "TradingView" in window) {
      new window.TradingView.widget({
        autosize: true,
        symbol: selectedSymbol,
        interval: "1",
        timezone: "America/New_York",
        theme: "light",
        style: "1",
        locale: "en",
        toolbar_bg: "#f1f3f6",
        enable_publishing: false,
        hide_top_toolbar: false,
        hide_side_toolbar: false,
        //allow_symbol_change: true,
        container_id: "tradingview_89d4a",
      });
    }
  }

  const handleSymbolChange = (event) => {
    setSelectedSymbol(event.target.value);
  };
  const handleSymbolChange2 = (event) => {
    setSelectedSymbol2(event.target.value);
  };
  const [orderType, setOrderType] = useState(""); // "buy" or "sell"
  const [orderAmount, setOrderAmount] = useState(0);

  const handleOrderTypeChange = (event) => {
    setOrderType(event.target.value);
  };

  const handleOrderAmountChange = (event) => {
    setOrderAmount(event.target.value);
  };
  const handleOrderSubmit = () => {
    // Here you can handle the order submission logic, like sending the order to a backend API
    console.log("Order type:", orderType);
    console.log("Order amount:", orderAmount);
  };

  return (
    <DashboardLayout>
      <div className="tradingview-widget-container">
        <div>
          <label htmlFor="symbolSelect">Select Symbol: </label>
          <select id="symbolSelect" value={selectedSymbol} onChange={handleSymbolChange}>
            <option value="FX:EURUSD">FX:EURUSD</option>
            <option value="FX:GBPUSD">FX:GBPUSD</option>
            <option value="FX_IDC:USDINR">FX_IDC:USDINR</option>
            <option value="FX:USDJPY">FX:USDJPY</option>
            <option value="FX:GBPUSD">FX:GBPJPY</option>
            <option value="FX:AUDUSD">FX:AUDUSD</option>
            <option value="FX:USDCAD">FX:USDCAD</option>
            <option value="FX:EURJPY">FX:EURJPY</option>
            <option value="FX:USDCHF">FX:USDCHF</option>
            <option value="NASDAQ:AAPL">AAPL</option>
            {/* Add more symbols as needed */}
          </select>
        </div>
        <div id="tradingview_89d4a" />
        <div className="tradingview-widget-copyright">
          {/* <a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank">
          <span className="blue-text">Track all markets on TradingView</span>
        </a> */}
        </div>
        <div className="order-form">
          <div className="order-type">
            <label htmlFor="orderType">Order Type:</label>
            <select id="orderType" value={orderType} onChange={handleOrderTypeChange}>
              <option value="">Select</option>
              <option value="buy">Buy</option>
              <option value="sell">Sell</option>
            </select>
          </div>
          <div>
            <label htmlFor="symbolSelect">Select Symbol: </label>
            <select id="symbolSelect" value={selectedSymbol2} onChange={handleSymbolChange2}>
              <option value="FX:EURUSD">FX:EURUSD</option>
              <option value="FX:GBPUSD">FX:GBPUSD</option>
              <option value="FX_IDC:USDINR">FX_IDC:USDINR</option>
              <option value="FX:USDJPY">FX:USDJPY</option>
              <option value="FX:GBPUSD">FX:GBPJPY</option>
              <option value="FX:AUDUSD">FX:AUDUSD</option>
              <option value="FX:USDCAD">FX:USDCAD</option>
              <option value="FX:EURJPY">FX:EURJPY</option>
              <option value="FX:USDCHF">FX:USDCHF</option>
              <option value="NASDAQ:AAPL">AAPL</option>
              {/* Add more symbols as needed */}
            </select>
          </div>
          <div className="order-amount">
            <label htmlFor="orderAmount">Amount:</label>
            <input
              type="number"
              id="orderAmount"
              value={orderAmount}
              onChange={handleOrderAmountChange}
            />
          </div>
          <div className="order-button-container">
            <button className={`order-button ${orderType}`} onClick={handleOrderSubmit}>
              {orderType === "buy" ? "Buy" : "Sell"}
            </button>
          </div>
        </div>
        <div className="order-table">
          <table>
            <thead>
              <tr>
                <th>Symbol</th>
                <th>Order Type</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{selectedSymbol2}</td>
                <td>{orderType}</td>
                <td>{orderAmount}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default LearnDashboard;
