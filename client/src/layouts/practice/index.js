import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import React, { useEffect, useRef, useState } from "react";
import "./Graph.css";
import "./LearnDashboard.css";
import axios from "axios";
import WalletProfit from "./components/walletProfit";
import BuySell from "./components/BuySell";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

let tvScriptLoadingPromise;

function LearnDashboard() {
  //trade symbols
  const [selectedSymbol, setSelectedSymbol] = useState("FX_IDC:EURINR");

  //const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Get the token from localStorage
    const jwtCookie = localStorage.getItem("jwt");
    axios
      .get("process.env.REACT_APP_BACKEND_URL/checkAuthentication", {
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
        details: true,
        //allow_symbol_change: true,
        container_id: "tradingview_89d4a",
      });
    }
  }

  const handleSymbolChange = (event) => {
    setSelectedSymbol(event.target.value);
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <div className="tradingview-widget-container">
        <div>
          <label htmlFor="symbolSelect">Select Symbol: </label>
          <select id="symbolSelect" value={selectedSymbol} onChange={handleSymbolChange}>
            <option value="EURINR">FX_IDC:EURINR</option>
            <option value="GBPINR">FX_IDC:GBPINR</option>
            <option value="USDINR">FX_IDC:USDINR</option>
            <option value="JPYINR">FX_IDC:JPYINR</option>
            <option value="MXNINR">FX_IDC:MXNINR</option>
            <option value="NZDINR">FX_IDC:NZDINR</option>
            <option value="CHFINR">FX_IDC:CHFINR</option>
            <option value="CADINR">FX_IDC:CADINR</option>
            <option value="AUDINR">FX_IDC:AUDINR</option>
            {/* <option value="NASDAQ:AAPL">AAPL</option> */}
            {/* Add more symbols as needed */}
          </select>
        </div>
        <div id="tradingview_89d4a" />
        <div className="tradingview-widget-copyright">
          {/* <a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank">
          <span className="blue-text">Track all markets on TradingView</span>
        </a> */}
        </div>
        <BuySell></BuySell>
        <WalletProfit></WalletProfit>
      </div>
    </DashboardLayout>
  );
}

export default LearnDashboard;
