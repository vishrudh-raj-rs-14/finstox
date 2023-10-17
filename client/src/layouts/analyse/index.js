import React from "react";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";

const tableItems = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

function AnalyseDashboard() {
  return (
    <DashboardLayout>
      <DashboardNavbar />
      
   




    {/* <div className="max-w-screen-xl mx-auto px-4 md:px-8">
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
    </div> */}

<div className="container p-2 mx-auto rounded-md sm:p-4 text-gray-800 bg-gray-50">
	<h2 className="mb-3 text-2xl font-semibold leadi">Analysis</h2>
	<div className="overflow-x-auto">
		<table className="min-w-full text-xs">
			<thead className="rounded-t-lg bg-gray-300">
				<tr className="text-right bg-slate-500">
					<th title="Ranking" className="p-3 text-left">Day</th>
					<th className="p-3"></th>
					<th className="p-3"></th>
					<th className="p-3"></th>
					<th title="Team name" className="p-3 text-center">Wins</th>
          <th className="p-3"></th>
          <th className="p-3"></th>
          <th className="p-3"></th>
          <th className="p-3"></th>
          <th className="p-3"></th>
          <th className="p-3"></th>
          <th className="p-3"></th>
					<th title="Win percentage" className="p-3">Losses</th>
          <th className="p-3"></th>
          <th className="p-3"></th>
          <th className="p-3"></th>
				</tr>
			</thead>
      <thead className="rounded-t-lg bg-gray-300">
				<tr className="text-right">
					<th className="p-3"></th>
					<th colSpan="3" title="Team name" className="p-3 text-center">Long Position		</th>
          <th className="p-3"></th>
          <th colSpan="3" title="Team name" className="p-3 text-center">Short Position		</th>
          <th className="p-3"></th>
          <th colSpan="3" title="Team name" className="p-3 text-center">Long Position		</th>
          <th className="p-3"></th>
          <th colSpan="3" title="Team name" className="p-3 text-center">Long Position		</th>      
				</tr>
			</thead>
      <thead className="rounded-t-lg bg-gray-300">
				<tr className="text-right">
					<th className="p-3"></th>
					<th className="p-3 text-center">% Profit</th>
					<th className="p-3 text-center">Strategy</th>
					<th className="p-3 text-center">Holding Time</th>
          <th className="p-3"></th>
					<th className="p-3 text-center">% Profit</th>
					<th className="p-3 text-center">Strategy</th>
					<th className="p-3 text-center">Holding Time</th>
          <th className="p-3"></th>
					<th className="p-3 text-center">% Profit</th>
					<th className="p-3 text-center">Strategy</th>
					<th className="p-3 text-center">Holding Time</th>
          <th className="p-3"></th>
					<th className="p-3 text-center">% Profit</th>
					<th className="p-3 text-center">Strategy</th>
					<th className="p-3 text-center">Holding Time</th>
          <th className="p-3"></th>
				</tr>
			</thead>
			<tbody>

        { tableItems.map((row, index) => (
          <tr className="text-right border-b border-opacity-20 border-gray-300 bg-gray-100">
            <td className="px-3 py-2 text-left">
              <span>{index +1}</span>
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
            <td className="px-3 py-2 text-right">
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
