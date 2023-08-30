import axios from "axios";

// Material Dashboard 2 React components
//import MDBox from "components/MDBox";
//import MDTypography from "components/MDTypography";
import { useEffect, useState } from "react";
//import MDAvatar from "components/MDAvatar";
//import MDProgress from "components/MDProgress";

export default function data() {
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

  return {
    columns: [
      { Header: "Symbol", accessor: "symbol", width: "30%", align: "center" },
      { Header: "Order Type", accessor: "orderType", align: "center" },
      { Header: "Amount", accessor: "amount", align: "center" },
    ],
    rows: practiceHistory.map((entry) => ({
      symbol: entry.symbol,
      orderType: entry.orderType,
      amount: entry.amount,
    })),
  };
}
