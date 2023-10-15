import React from "react";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

const tableItems = [
  {
      name: "Liam James",
      email: "liamjames@example.com",
      position: "Software engineer",
      salary: "$100K"
  },
  {
      name: "Olivia Emma",
      email: "oliviaemma@example.com",
      position: "Product designer",
      salary: "$90K"
  },
  {
      name: "William Benjamin",
      email: "william.benjamin@example.com",
      position: "Front-end developer",
      salary: "$80K"
  },
  {
      name: "Henry Theodore",
      email: "henrytheodore@example.com",
      position: "Laravel engineer",
      salary: "$120K"
  },
  {
      name: "Amelia Elijah",
      email: "amelia.elijah@example.com",
      position: "Open source manager",
      salary: "$75K"
  },
]

function AnalyseDashboard() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      
   




    <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="max-w-lg">
            <h3 className="text-gray-800 text-xl font-bold sm:text-2xl">
                Analysis
            </h3>
            <p className="text-gray-600 mt-2">
                Analyse your record and get insight.
            </p>
        </div>
        <div className="mt-12 shadow-sm border rounded-lg overflow-x-auto">
            <table className="w-full table-auto text-sm text-left">
              <thead className="bg-gray-50 text-gray-600 font-medium border-b">
                    <tr className="divide-x">
                        <th className="py-3 px-6">Day</th>
                        <th className="py-3 px-6">Wins</th>
                        <th className="py-3 px-6">Losses</th>
                    </tr>
                </thead>
                <thead className="bg-gray-50 text-gray-600 font-medium border-b">
                    <tr className="divide-x">
                        <th className="py-3 px-6">Long Position</th>
                        <th className="py-3 px-6">Short Position</th>
                        <th className="py-3 px-6">Long Position</th>
                        <th className="py-3 px-6">Short Position</th>
                    </tr>
                </thead>
                <tbody className="text-gray-600 divide-y">
                    {
                        tableItems.map((item, idx) => (
                            <tr key={idx} className="divide-x">
                                <td className="px-6 py-4 whitespace-nowrap flex items-center gap-x-6">
                                    <span>{idx + 1}</span>
                                    {item.name}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">{item.email}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{item.position}</td>
                                <td className="px-6 py-4 whitespace-nowrap">{item.salary}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    </div>


    </DashboardLayout>
  );
}

export default AnalyseDashboard;
