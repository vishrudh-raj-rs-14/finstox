export const formatStockData = (stockData) => {
  const formattedData = [];

  if (stockData["Time Series (1min)"]) {
    Object.entries(stockData["Time Series (1min)"]).map(([key, value]) => {
      formattedData.push({
        x: key,
        y: [value["1. open"], value["2. high"], value["3. low"], value["4. close"]],
      });
    });
  }
  return formattedData;
};
// export const formatStockData = (stockData) => {
//   const formattedData = [];

//   if (stockData && stockData.values && Array.isArray(stockData.values)) {
//     stockData.values.forEach((item) => {
//       formattedData.push({
//         x: item.datetime.substring(0, 10), // Extract the date part only (YYYY-MM-DD)
//         y: [item.open, item.high, item.low, item.close],
//       });
//     });
//   }
//   return formattedData;
// };
// export const formatStockData = (data) => {
//   if (!data || !data.values || !Array.isArray(data.values)) {
//     // Handle the case where data or values is missing or not an array
//     return [];
//   }
//   const formattedData = data.values.map((item) => ({
//     x: item.datetime, // The date part is already in the correct format (YYYY-MM-DD)
//     y: [parseFloat(item.open), parseFloat(item.high), parseFloat(item.low), parseFloat(item.close)],
//   }));

//   return formattedData;
// };
