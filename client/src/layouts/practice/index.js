import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import React, { useEffect, useRef, useState } from "react";
import "./Graph.css";
import "./LearnDashboard.css";
import axios from "axios";
import MDBox from "components/MDBox";
import { Card, Grid } from "@mui/material";
import MDTypography from "components/MDTypography";
import DataTable from "examples/Tables/DataTable";

let tvScriptLoadingPromise;

function LearnDashboard() {
  const [selectedSymbol, setSelectedSymbol] = useState("FX:EURUSD");
  const [selectedSymbol2, setSelectedSymbol2] = useState("EURUSD");
  const [selectedSymbol3, setSelectedSymbol3] = useState("EURUSD");
  const [practiceHistory, setPracticeHistory] = useState([]);

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

  //to get practice history
  const fetchPracticeHistory = async () => {
    try {
      const storedUserEmail = localStorage.getItem("userEmail");
      const practiceHistoryResponse = await axios.post("http://localhost:4337/practiceHistory", {
        email: storedUserEmail,
      });
      setPracticeHistory(practiceHistoryResponse.data);
    } catch (error) {
      console.error("Error fetching practice history:", error);
    }
  };

  useEffect(() => {
    fetchPracticeHistory();
  }, []);

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
  const handleSymbolChange2 = (event) => {
    setSelectedSymbol2(event.target.value);
  };
  const handleSymbolChange3 = (event) => {
    setSelectedSymbol3(event.target.value);
  };
  //const [orderType, setOrderType] = useState(""); // "buy" or "sell"
  const [orderAmount, setOrderAmount] = useState(0);
  const [orderStock, setOrderStock] = useState(0);

  //   const handleOrderTypeChange = (event) => {
  //     setOrderType(event.target.value);
  //   };

  const handleOrderAmountChange = (event) => {
    setOrderAmount(event.target.value);
  };
  const handleOrderStockChange = (event) => {
    setOrderStock(event.target.value);
  };
  const handleOrderSubmitBuy = async () => {
    try {
      const rapidApiKey = process.env.REACT_APP_RAPID_API_KEY;
      const response = await axios.get(`https://realstonks.p.rapidapi.com/${selectedSymbol2}`, {
        headers: {
          "X-RapidAPI-Key": rapidApiKey,
          "X-RapidAPI-Host": "realstonks.p.rapidapi.com",
        },
      });
      const price = response.data.price;
      const orderType = "Buy";
      console.log(selectedSymbol2);
      console.log("Order type:", orderType);
      console.log("Order amount:", orderAmount);
      console.log("Price:", price);
      const storedUserEmail = localStorage.getItem("userEmail");
      const orderData = {
        email: storedUserEmail,
        symbol: selectedSymbol2,
        orderType,
        amount: orderAmount,
        currentValue: price,
      };

      // Send the data to the backend endpoint
      const backendResponse = await axios.post("http://localhost:4337/practiceBuy", orderData);
      console.log("Backend Response:", backendResponse.data);

      const practiceHistoryResponse = await axios.post("http://localhost:4337/practiceHistory", {
        email: storedUserEmail,
      });
      setPracticeHistory(practiceHistoryResponse.data);
    } catch (error) {
      console.error("Error fetching price:", error);
    }
  };
  const handleOrderSubmitSell = async () => {
    try {
      const rapidApiKey = process.env.REACT_APP_RAPID_API_KEY;
      const response = await axios.get(`https://realstonks.p.rapidapi.com/${selectedSymbol3}`, {
        headers: {
          "X-RapidAPI-Key": rapidApiKey,
          "X-RapidAPI-Host": "realstonks.p.rapidapi.com",
        },
      });
      const price = response.data.price;
      const orderType = "Sell";
      console.log(selectedSymbol3);
      console.log("Order type:", orderType);
      console.log("Order amount:", orderStock);
      console.log("Price:", price);
      const storedUserEmail = localStorage.getItem("userEmail");
      const orderData = {
        email: storedUserEmail,
        symbol: selectedSymbol3,
        orderType,
        stock: orderStock,
        currentValue: price,
      };

      // Send the data to the backend endpoint
      const backendResponse = await axios.post("http://localhost:4337/practiceSell", orderData);
      console.log("Backend Response:", backendResponse.data);

      const practiceHistoryResponse = await axios.post("http://localhost:4337/practiceHistory", {
        email: storedUserEmail,
      });
      setPracticeHistory(practiceHistoryResponse.data);
    } catch (error) {
      console.error("Error fetching price:", error);
    }
  };
  const { columns: pColumns, rows: pRows } = {
    columns: [
      { Header: "Symbol", accessor: "symbol", width: "30%", align: "center" },
      { Header: "Order Type", accessor: "orderType", align: "center" },
      { Header: "Amount", accessor: "amount", align: "center" },
      { Header: "Stock", accessor: "stock", align: "center" },
      { Header: "Market Price", accessor: "marketPrice", align: "center" },
    ],
    rows: practiceHistory.map((entry) => ({
      symbol: entry.symbol,
      orderType: entry.orderType,
      amount: entry.amount,
      stock: entry.stock,
      marketPrice: entry.currentValue,
    })),
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
            <option value="FX:GBPJPY">FX:GBPJPY</option>
            <option value="FX:AUDUSD">FX:AUDUSD</option>
            <option value="FX:USDCAD">FX:USDCAD</option>
            <option value="FX:EURJPY">FX:EURJPY</option>
            <option value="FX:USDCHF">FX:USDCHF</option>
            <option value="FX:USDCNH">FX:USDCNH</option>
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

        <Grid
          container
          spacing={3}
          alignItems="center"
          style={{ marginTop: "30px", marginLeft: "1px" }}
        >
          <Grid item xs={6} style={{ backgroundColor: "lightblue" }}>
            <MDBox
              style={{
                marginBottom: "5px",
                paddingLeft: "200px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <MDTypography
                style={{
                  fontSize: "25px",
                  fontWeight: "bold",
                  fontFamily: "Your-Desired-Font, sans-serif",
                }}
              >
                Buy
              </MDTypography>
            </MDBox>

            <div>
              <label htmlFor="symbolSelect1">Select Symbol:</label>
              <select id="symbolSelect1" value={selectedSymbol2} onChange={handleSymbolChange2}>
                <option value="EURUSD">FX:EURUSD</option>
                <option value="GBPUSD">FX:GBPUSD</option>
                <option value="USDINR">FX_IDC:USDINR</option>
                <option value="USDJPY">FX:USDJPY</option>
                <option value="GBPJPY">FX:GBPJPY</option>
                <option value="AUDUSD">FX:AUDUSD</option>
                <option value="USDCAD">FX:USDCAD</option>
                <option value="EURJPY">FX:EURJPY</option>
                <option value="USDCHF">FX:USDCHF</option>
                <option value="USDCNH">FX:USDCNH</option>
                <option value="AAPL">AAPL</option>
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
              <button className="order-button buy" onClick={handleOrderSubmitBuy}>
                Buy
              </button>
            </div>
          </Grid>

          <Grid item xs={6} style={{ backgroundColor: "lightred" }}>
            <MDBox
              style={{
                marginBottom: "5px",
                paddingLeft: "200px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <MDTypography
                style={{
                  fontSize: "25px",
                  fontWeight: "bold",
                  fontFamily: "Your-Desired-Font, sans-serif",
                }}
              >
                Sell
              </MDTypography>
            </MDBox>

            <div>
              <label htmlFor="symbolSelect1">Select Symbol:</label>
              <select id="symbolSelect1" value={selectedSymbol3} onChange={handleSymbolChange3}>
                <option value="EURUSD">FX:EURUSD</option>
                <option value="GBPUSD">FX:GBPUSD</option>
                <option value="USDINR">FX_IDC:USDINR</option>
                <option value="USDJPY">FX:USDJPY</option>
                <option value="GBPJPY">FX:GBPJPY</option>
                <option value="AUDUSD">FX:AUDUSD</option>
                <option value="USDCAD">FX:USDCAD</option>
                <option value="EURJPY">FX:EURJPY</option>
                <option value="USDCHF">FX:USDCHF</option>
                <option value="USDCNH">FX:USDCNH</option>
                <option value="AAPL">AAPL</option>
              </select>
            </div>
            <div className="order-amount">
              <label htmlFor="orderAmount">Stock:</label>
              <input
                type="number"
                id="orderAmount"
                value={orderStock}
                onChange={handleOrderStockChange}
              />
            </div>
            <div className="order-button-container">
              <button className="order-button sell" onClick={handleOrderSubmitSell}>
                Sell
              </button>
            </div>
          </Grid>
        </Grid>
        <MDBox pt={6} pb={3}>
          <Grid container spacing={6}>
            <Grid item xs={12}>
              <Card>
                <MDBox
                  mx={2}
                  mt={-3}
                  py={3}
                  px={2}
                  variant="gradient"
                  bgColor="info"
                  borderRadius="lg"
                  coloredShadow="info"
                >
                  <MDTypography variant="h6" color="white">
                    Practice History
                  </MDTypography>
                </MDBox>
                <MDBox pt={3}>
                  <DataTable
                    table={{ columns: pColumns, rows: pRows }}
                    isSorted={false}
                    entriesPerPage={false}
                    showTotalEntries={false}
                    noEndBorder
                  />
                </MDBox>
              </Card>
            </Grid>
          </Grid>
        </MDBox>
      </div>
    </DashboardLayout>
  );
}

export default LearnDashboard;
