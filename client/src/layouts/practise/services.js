export const fetchStockData = async (symbol) => {
  console.log(symbol);
  const response = await fetch(
    `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=AAPL&interval=1min&apikey=${process.env.STOCK_DATA_API_KEY}`
  );
  const data = await response.json();
  //console.log(data);
  return data;
};

//https://www.alphavantage.co/query?function=TIME_SERIES_WEEKLY_ADJUSTED&symbol=${symbol}&apikey=${process.env.STOCK_DATA_API_KEY}
//http://api.marketstack.com/v1/eod?access_key=f0951b02917356e5846b1c8e8f1b7e3a&symbols=${symbol}
//https://api.twelvedata.com/time_series?symbol=AAPL,EUR/USD,ETH/BTC:Huobi,TRP:TSX&interval=1min&apikey=bfd69ab05710430c98b92f290ca76065
//https://eodhistoricaldata.com/api/eod/MCD.US?api_token=64bba5b6622414.92168434&fmt=json
//https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=Q55B2FMBML1KMZ6E
