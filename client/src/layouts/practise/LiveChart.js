import { useEffect, useMemo, useState } from "react";
import { fetchStockData } from "./services";
import { formatStockData } from "./utils";
import ReactApexChart from "react-apexcharts";
import { candleStickOptions } from "./constants";
import PropTypes from "prop-types";

const LiveChart = ({ symbol }) => {
  LiveChart.propTypes = {
    symbol: PropTypes.string.isRequired,
  };
  const [stockData, setStockData] = useState({});

  //console.log(symbol);

  useEffect(() => {
    fetchStockData(symbol).then((data) => setStockData(data));
  }, []);

  const seriesData = useMemo(() => formatStockData(stockData), [stockData]);

  //console.log(seriesData);

  return (
    <>
      {seriesData && seriesData.length > 0 ? (
        <ReactApexChart
          series={[
            {
              data: seriesData,
            },
          ]}
          options={candleStickOptions}
          type="candlestick"
        />
      ) : (
        <h1>Loading...</h1>
      )}
    </>
  );
};

export default LiveChart;
