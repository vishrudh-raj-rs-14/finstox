import {
  Card,
  Grid,
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Button,
  Box,
} from "@mui/material";
import axios from "axios";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import DataTable from "examples/Tables/DataTable";
import { useEffect, useState } from "react";
import "./dialog.css";
import { useMaterialUIController } from "context";

function BuySell() {
  const [controller] = useMaterialUIController();
  const { darkMode } = controller;
  const [selectedSymbol2, setSelectedSymbol2] = useState("EURUSD");
  const [selectedSymbol3, setSelectedSymbol3] = useState("EURUSD");
  const [practiceHistory, setPracticeHistory] = useState([]);
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
      const storedUserEmail = localStorage.getItem("userEmail");
      const orderData = {
        email: storedUserEmail,
        symbol: selectedSymbol2,
        orderType,
        amount: orderAmount,
        currentValue: price,
        journal: modalFormData,
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
      const storedUserEmail = localStorage.getItem("userEmail");
      const orderData = {
        email: storedUserEmail,
        symbol: selectedSymbol3,
        orderType,
        stock: orderStock,
        currentValue: price,
        journal: modalFormDataSell,
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
      { Header: "Amount(₹)", accessor: "amount", align: "center" },
      { Header: "Quantity", accessor: "stock", align: "center" },
    ],
    rows: practiceHistory.map((entry) => ({
      symbol: entry.symbol,
      orderType: entry.orderType,
      amount: entry.amount,
      stock: entry.stock,
    })),
  };

  const [openModal, setOpenModal] = useState(false);
  const [openModalSell, setOpenModalSell] = useState(false);

  const [modalFormData, setModalFormData] = useState({
    orderType: "Buy",
    entryPrice: "",
    entryTime: "",
    strategy: "",
    timeFrame: "",
    indicator: "",
    chartPattern: "",
    reasonTrade: "",
  });

  const handleOpenModal = () => {
    setOpenModal(true);
  };
  const handleCloseModal = () => {
    setOpenModal(false);
  };

  // Function to handle changes in modal form fields
  const handleModalInputChange = (event) => {
    const { name, value } = event.target;
    setModalFormData({
      ...modalFormData,
      [name]: value,
    });
  };

  const [modalFormDataSell, setModalFormDataSell] = useState({
    orderType: "Sell",
    exitPrice: "",
    exitTime: "",
  });

  const handleOpenModalSell = () => {
    setOpenModalSell(true);
  };
  const handleCloseModalSell = () => {
    setOpenModalSell(false);
  };

  // Function to handle changes in modal form fields
  const handleModalInputChangeSell = (event) => {
    const { name, value } = event.target;
    setModalFormDataSell({
      ...modalFormDataSell,
      [name]: value,
    });
    //checkFormValidity();
  };

  return (
    <>
      <Grid
        container
        spacing={3}
        alignItems="center"
        style={{ marginTop: "30px", marginLeft: "1px" }}
      >
        <Grid item xs={12} sm={6} style={{ backgroundColor: "lightblue" }}>
          <MDBox
            style={{
              marginBottom: "5px",
              paddingLeft: "35%",
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
            <button className="order-button buy" onClick={handleOpenModal}>
              Buy
            </button>
          </div>
        </Grid>

        <Grid item xs={12} sm={6} style={{ backgroundColor: "lightred" }}>
          <MDBox
            style={{
              marginBottom: "5px",
              paddingLeft: "35px",
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
            <label htmlFor="orderAmount">Quantity:</label>
            <input
              type="number"
              id="orderAmount"
              value={orderStock}
              onChange={handleOrderStockChange}
            />
          </div>
          <div className="order-button-container">
            <button className="order-button sell" onClick={handleOpenModalSell}>
              Sell
            </button>
          </div>
        </Grid>
      </Grid>
      <MDBox pt={6} pb={3} xs={12}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="dark"
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
      <Dialog open={openModal} onClose={handleCloseModal} fullWidth maxWidth="sm">
        <DialogTitle style={{ backgroundColor: "black", color: "white" }}>
          Trade Details
        </DialogTitle>
        <DialogContent className={darkMode ? "dark-mode-dialog" : "light-mode-dialog"}>
          <form>
            <TextField
              label="Order Type"
              name="orderType"
              value={modalFormData.orderType}
              fullWidth
              required
              margin="normal"
              readOnly
            />
            <TextField
              label="Entry Price"
              name="entryPrice"
              value={modalFormData.entryPrice}
              onChange={handleModalInputChange}
              fullWidth
              required
              margin="normal"
            />
            <TextField
              label="Entry Time"
              name="entryTime"
              value={modalFormData.entryTime}
              onChange={handleModalInputChange}
              fullWidth
              required
              margin="normal"
            />
            <TextField
              label="Strategy"
              name="strategy"
              value={modalFormData.strategy}
              onChange={handleModalInputChange}
              fullWidth
              required
              margin="normal"
            />
            <TextField
              label="Time Frame"
              name="timeFrame"
              value={modalFormData.timeFrame}
              onChange={handleModalInputChange}
              fullWidth
              required
              margin="normal"
            />
            <TextField
              label="Indicator"
              name="indicator"
              value={modalFormData.indicator}
              onChange={handleModalInputChange}
              fullWidth
              required
              margin="normal"
            />
            <TextField
              label="Chart Pattern"
              name="chartPattern"
              value={modalFormData.chartPattern}
              onChange={handleModalInputChange}
              fullWidth
              required
              margin="normal"
            />
            <TextField
              label="Reason for Trade"
              name="reasonTrade"
              value={modalFormData.reasonTrade}
              onChange={handleModalInputChange}
              fullWidth
              required
              margin="normal"
            />
            <Box display="flex" justifyContent="center" marginTop={2}>
              <Button
                variant="contained"
                color="white"
                style={{ backgroundColor: "blue", color: "white" }}
                onClick={() => {
                  handleOrderSubmitBuy();
                  handleCloseModal();
                }}
                //disabled={!isFormValid}
              >
                Submit
              </Button>
            </Box>
          </form>
        </DialogContent>
      </Dialog>

      <Dialog open={openModalSell} onClose={handleCloseModalSell} fullWidth maxWidth="sm">
        <DialogTitle style={{ backgroundColor: "black", color: "white" }}>
          Trade Details
        </DialogTitle>
        <DialogContent className={darkMode ? "dark-mode-dialog" : "light-mode-dialog"}>
          <form>
            <TextField
              label="Order Type"
              name="orderType"
              value={modalFormDataSell.orderType}
              fullWidth
              required
              margin="normal"
              readOnly
            />
            <TextField
              label="Exit Price"
              name="exitPrice"
              value={modalFormDataSell.exitPrice}
              onChange={handleModalInputChangeSell}
              fullWidth
              required
              margin="normal"
            />

            <TextField
              label="Exit Time"
              name="exitTime"
              value={modalFormDataSell.exitTime}
              onChange={handleModalInputChangeSell}
              fullWidth
              required
              margin="normal"
            />

            <Box display="flex" justifyContent="center" marginTop={2}>
              <Button
                variant="contained"
                color="dark"
                style={{ backgroundColor: "blue", color: "white" }}
                onClick={() => {
                  handleOrderSubmitSell();
                  handleCloseModalSell();
                }}
                //disabled={!isFormValid}
              >
                Submit
              </Button>
            </Box>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default BuySell;
