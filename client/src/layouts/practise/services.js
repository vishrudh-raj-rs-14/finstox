export const fetchStockData = async (symbol) => {
  console.log(symbol);
  const response = await fetch(
    `https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY_ADJUSTED&symbol=${symbol}&apikey=${process.env.STOCK_DATA_API_KEY}`
  );
  const data = await response.json();
  return data;
};

//https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY_ADJUSTED&symbol=${symbol}&apikey=${process.env.STOCK_DATA_API_KEY}
//http://api.marketstack.com/v1/eod?access_key=f0951b02917356e5846b1c8e8f1b7e3a&symbols=${symbol}
