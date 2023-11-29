import React from "react";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import { useEffect, useState } from "react";
import DataTable from "examples/Tables/DataTable";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import { Card, Grid } from "@mui/material";

// const EmptyTable = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
// const headers = [
//   "Date",
//   "Success Rate",
//   "Profit(%)",
//   "Loss(%)",
//   "Net Profit",
//   "Avg. Win",
//   "Avg. Loss",
//   "Win/Loss",
// ];

function AnalyseDashboard() {
  const [tableItems, setTableItems] = useState([]);
  //const [email, setEmail] = useState("");
  //console.log(email);

  useEffect(() => {
    const email = localStorage.getItem("userEmail");
    const fetchData = async () => {
      try {
        const api = process.env.REACT_APP_BACKEND_URL;
        const response = await fetch(`${api}/getAnalysis`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        });

        if (response.ok) {
          const data = await response.json();
          setTableItems(data);
        } else {
          console.error("Error fetching data:", response.status);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const { columns: pColumns, rows: pRows } = {
    columns: [
      { Header: "Date", accessor: "Date", width: "30%", align: "center" },
      { Header: "Success Rate", accessor: "SuccessRate", align: "center" },
      { Header: "Profit(%)", accessor: "Profit", align: "center" },
      { Header: "Loss(%)", accessor: "Loss", align: "center" },
      { Header: "Net Profit", accessor: "NetProfit", align: "center" },
      { Header: "Avg. Win", accessor: "AvgWin", align: "center" },
      { Header: "Avg. Loss", accessor: "AvgLoss", align: "center" },
      { Header: "Win/Loss", accessor: "WinLoss", align: "center" },
    ],
    rows: tableItems.map((entry) => ({
      Date: entry.date,
      SuccessRate: entry.successRate,
      Profit: entry.profitPercentage,
      Loss: entry.lossPercentage,
      NetProfit: entry.netPercentage,
      AvgWin: entry.avgWin,
      AvgLoss: entry.avgLoss,
      WinLoss: entry.winLossRatio,
    })),
  };

  console.log(tableItems);

  return (
    <DashboardLayout>
      <DashboardNavbar />
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
                  Analysis
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

      {/* <div className="container p-2 mx-auto rounded-md sm:p-4 text-gray-800 bg-gray-50">
        <h2 className="mb-3 text-2xl font-semibold leadi">Analysis</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full text-xs">
            <thead className="rounded-t-lg bg-gray-300">
              <tr className="text-right bg-slate-500">
                {headers.map((header, index) => (
                  <th key={index} title={header} className="p-3 text-left">
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {tableItems.length > 0
                ? tableItems.map((row, rowIndex) => (
                    <tr
                      key={rowIndex}
                      className="text-right border-b border-opacity-20 border-gray-300 bg-gray-100"
                    >
                      {Object.values(row).map((value, columnIndex) => (
                        <td key={columnIndex} className="px-3 py-2 text-left">
                          {value}
                        </td>
                      ))}
                    </tr>
                  ))
                : EmptyTable.map((row, rowIndex) => (
                    <tr
                      key={rowIndex}
                      className="text-right border-b border-opacity-20 border-gray-300 bg-gray-100"
                    >
                      {tableItems[0] &&
                        Object.keys(tableItems[0]).map((key, columnIndex) => (
                          <td key={columnIndex} className="px-3 py-2 text-left"></td>
                        ))}
                    </tr>
                  ))}
            </tbody>
          </table>
        </div>
      </div> */}
    </DashboardLayout>
  );
}

export default AnalyseDashboard;
