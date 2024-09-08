import { Card, Grid } from "@mui/material";
import axios from "axios";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import DataTable from "examples/Tables/DataTable";
import { useEffect, useState } from "react";

function WalletProfit() {
  const [symbolStock, setSymbolStock] = useState([]);
  const [sellProfit, setSellProfit] = useState([]);

  const fetchSymbolStock = async () => {
    try {
      const storedUserEmail = localStorage.getItem("userEmail");
      const SymbolStockResponse = await axios.post("process.env.REACT_APP_BACKEND_URL/getStocks", {
        email: storedUserEmail,
      });
      setSymbolStock(SymbolStockResponse.data);
    } catch (error) {
      console.error("Error fetching practice history:", error);
    }
  };

  useEffect(() => {
    fetchSymbolStock();
  }, []);

  const fetchSellProfit = async () => {
    try {
      const storedUserEmail = localStorage.getItem("userEmail");
      const SymbolStockResponse = await axios.post(
        "process.env.REACT_APP_BACKEND_URL/sellProfits",
        {
          email: storedUserEmail,
        }
      );
      setSellProfit(SymbolStockResponse.data);
    } catch (error) {
      console.error("Error fetching practice history:", error);
    }
  };

  useEffect(() => {
    fetchSellProfit();
  }, []);

  const { columns: stColumns, rows: stRows } = {
    columns: [
      { Header: "Symbol", accessor: "symbol", width: "30%", align: "center" },
      { Header: "Quantity", accessor: "stockLeft", align: "center" },
    ],
    rows: symbolStock.map((entry) => ({
      symbol: entry.symbol,
      stockLeft: entry.stockLeft,
    })),
  };
  const { columns: sColumns, rows: sRows } = {
    columns: [
      { Header: "Symbol", accessor: "symbol", width: "30%", align: "center" },
      { Header: "Profit", accessor: "profit", align: "center" },
    ],
    rows: sellProfit.map((entry) => ({
      symbol: entry.symbol,
      profit: entry.profitSell,
    })),
  };

  return (
    <MDBox pt={4}>
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <MDBox mb={3}>
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
                  Stock Wallet
                </MDTypography>
              </MDBox>
              <MDBox pt={3}>
                <DataTable
                  table={{ columns: stColumns, rows: stRows }}
                  isSorted={false}
                  entriesPerPage={false}
                  showTotalEntries={false}
                  noEndBorder
                />
              </MDBox>
            </Card>
          </MDBox>
        </Grid>
        <Grid item xs={6}>
          <MDBox mb={3}>
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
                  Profit History
                </MDTypography>
              </MDBox>
              <MDBox pt={3}>
                <DataTable
                  table={{ columns: sColumns, rows: sRows }}
                  isSorted={false}
                  entriesPerPage={false}
                  showTotalEntries={false}
                  noEndBorder
                />
              </MDBox>
            </Card>
          </MDBox>
        </Grid>
      </Grid>
    </MDBox>
  );
}

export default WalletProfit;
