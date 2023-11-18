import React from "react";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import { useEffect, useState } from "react";

const EmptyTable = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

function AnalyseDashboard() {
  const [tableItems, setTableItems] = useState({ getLossAnalyse: [], getWinAnalyse: [] });
  const [email, setEmail] = useState("");
  console.log(email);
  useEffect(() => {
    const email = localStorage.getItem("userEmail");

    const fetchData = async () => {
      try {
        const api = process.env.REACT_APP_BACKEND_URL;
        console.log(api);

        const getWinDataResponse = await fetch(`${api}/getWinAnalyse`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        });

        const getWinData = await getWinDataResponse.json();

        if (getWinData.status === 500) {
          alert("Failed to get win data");
          setEmail("Internal Server Error");
        } else {
          setTableItems((prevItems) => ({ ...prevItems, getWinAnalyse: getWinData }));
        }

        const getLossDataResponse = await fetch(`${api}/getLossAnalyse`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email }),
        });

        const getLossData = await getLossDataResponse.json();

        if (getLossData.status === 500) {
          alert("Failed to get loss data");
          setEmail("Internal Server Error");
        } else {
          setTableItems((prevItems) => ({ ...prevItems, getLossAnalyse: getLossData }));
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  console.log(tableItems);
  return (
    <DashboardLayout>
      <DashboardNavbar />

      <div className="container p-2 mx-auto rounded-md sm:p-4 text-gray-800 bg-gray-50">
        <h2 className="mb-3 text-2xl font-semibold leadi">Analysis</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full text-xs">
            <thead className="rounded-t-lg bg-gray-300">
              <tr className="text-right bg-slate-500">
                <th title="Ranking" className="p-3 text-left">
                  Day
                </th>
                <th className="p-3"></th>
                <th className="p-3"></th>
                <th className="p-3"></th>
                <th title="Team name" className="p-3 text-center">
                  Wins
                </th>
                {/* <th className="p-3"></th>
                <th className="p-3"></th>
                <th className="p-3"></th>
                <th className="p-3"></th> */}
                <th className="p-3"></th>
                <th className="p-3"></th>
                <th className="p-3"></th>
                <th title="Win percentage" className="p-3">
                  Losses
                </th>
                {/* <th className="p-3"></th>
                <th className="p-3"></th>
                <th className="p-3"></th> */}
              </tr>
            </thead>
            <thead className="rounded-t-lg bg-gray-300">
              <tr className="text-right">
                <th className="p-3"></th>
                <th colSpan="3" title="Team name" className="p-3 text-center">
                  Long Position{" "}
                </th>
                <th className="p-3"></th>
                {/* <th colSpan="3" title="Team name" className="p-3 text-center">
                  Short Position{" "}
                </th> */}
                <th colSpan="3" title="Team name" className="p-3 text-center">
                  Long Position{" "}
                </th>
                <th className="p-3"></th>
                {/* <th className="p-3"></th>
                <th colSpan="3" title="Team name" className="p-3 text-center">
                  Long Position{" "}
                </th> */}
              </tr>
            </thead>
            <thead className="rounded-t-lg bg-gray-300">
              <tr className="text-right">
                <th className="p-3"></th>
                <th className="p-3 text-center">% Profit</th>
                <th className="p-3 text-center">Strategy</th>
                <th className="p-3 text-center">Holding Time</th>
                <th className="p-3"></th>
                {/* <th className="p-3 text-center">% Profit</th>
                <th className="p-3 text-center">Strategy</th>
                <th className="p-3 text-center">Holding Time</th>
                <th className="p-3"></th> */}
                <th className="p-3 text-center">% Profit</th>
                <th className="p-3 text-center">Strategy</th>
                <th className="p-3 text-center">Holding Time</th>
                <th className="p-3"></th>
                {/* <th className="p-3 text-center">% Profit</th>
                <th className="p-3 text-center">Strategy</th>
                <th className="p-3 text-center">Holding Time</th>
                <th className="p-3"></th> */}
              </tr>
            </thead>
            <tbody>
              {tableItems.getLossAnalyse.length != 0
                ? Object.keys(tableItems.getWinAnalyse).map((index) => (
                    <tr className="text-right border-b border-opacity-20 border-gray-300 bg-gray-100">
                      <td className="px-3 py-2 text-left">
                        <span>{index + 1}</span>
                      </td>
                      <td className="px-3 py-2">
                        <span>
                          {tableItems.getWinAnalyse[index].profit
                            ? tableItems.getWinAnalyse[index].profit
                            : ""}
                        </span>
                      </td>
                      <td className="px-3 py-2">
                        <span>
                          {tableItems.getWinAnalyse[index].strategy
                            ? tableItems.getWinAnalyse[index].strategy
                            : ""}
                        </span>
                      </td>
                      <td className="px-3 py-2">
                        <span>
                          {tableItems.getWinAnalyse[index].holdingTime
                            ? tableItems.getWinAnalyse[index].holdingTime
                            : ""}
                        </span>
                      </td>
                      <td className="px-3 py-2 text-left">
                        <span></span>
                      </td>
                      {/* <td className="px-3 py-2 text-right">
                      <span></span>
                    </td>
                    <td className="px-3 py-2">
                      <span></span>
                    </td>
                    <td className="px-3 py-2">
                      <span></span>
                    </td>
                    <td className="px-3 py-2">
                      <span></span>
                    </td> */}
                      <td className="px-3 py-2">
                        <span>
                          {tableItems.getLossAnalyse[index].profit
                            ? tableItems.getLossAnalyse[index].profit
                            : ""}
                        </span>
                      </td>
                      <td className="px-3 py-2">
                        <span>
                          {tableItems.getLossAnalyse[index].strategy
                            ? tableItems.getLossAnalyse[index].strategy
                            : ""}
                        </span>
                      </td>
                      <td className="px-3 py-2">
                        <span>
                          {tableItems.getLossAnalyse[index].holdingTime
                            ? tableItems.getLossAnalyse[index].holdingTime
                            : ""}
                        </span>
                      </td>
                      <td className="px-3 py-2">
                        <span></span>
                      </td>
                      {/* <td className="px-3 py-2">
                      <span></span>
                    </td>
                    <td className="px-3 py-2">
                      <span></span>
                    </td>
                    <td className="px-3 py-2">
                      <span></span>
                    </td>
                    <td className="px-3 py-2">
                      <span></span>
                    </td> */}
                    </tr>
                  ))
                : EmptyTable.map((row, index) => (
                    <tr className="text-right border-b border-opacity-20 border-gray-300 bg-gray-100">
                      <td className="px-3 py-2 text-left">
                        <span>{index + 1}</span>
                      </td>
                      <td className="px-3 py-2 text-left">
                        <span></span>
                      </td>
                      <td className="px-3 py-2">
                        <span></span>
                      </td>
                      <td className="px-3 py-2">
                        <span></span>
                      </td>
                      <td className="px-3 py-2">
                        <span></span>
                      </td>
                      {/* <td className="px-3 py-2 text-right">
                      <span></span>
                    </td>
                    <td className="px-3 py-2">
                      <span></span>
                    </td>
                    <td className="px-3 py-2">
                      <span></span>
                    </td>
                    <td className="px-3 py-2">
                      <span></span>
                    </td> */}
                      <td className="px-3 py-2">
                        <span></span>
                      </td>
                      <td className="px-3 py-2">
                        <span></span>
                      </td>
                      <td className="px-3 py-2">
                        <span></span>
                      </td>
                      <td className="px-3 py-2">
                        <span></span>
                      </td>
                      {/* <td className="px-3 py-2">
                      <span></span>
                    </td>
                    <td className="px-3 py-2">
                      <span></span>
                    </td>
                    <td className="px-3 py-2">
                      <span></span>
                    </td>
                    <td className="px-3 py-2">
                      <span></span>
                    </td> */}
                    </tr>
                  ))}
            </tbody>
          </table>
        </div>
      </div>
    </DashboardLayout>
  );
}

export default AnalyseDashboard;
