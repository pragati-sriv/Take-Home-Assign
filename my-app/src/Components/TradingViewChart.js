import React from "react";

const TradingViewChart = () => (
  <div>
    <iframe
      src="https://s.tradingview.com/widgetembed/?frameElementId=tradingview_9e841&symbol=BITSTAMP:BTCUSD&interval=D&symboledit=1&saveimage=1&toolbarbg=f1f3f6&studies=%5B%5D&theme=Light&style=1&timezone=exchange&withdateranges=1&showpopupbutton=1&studies_overrides=%7B%7D&overrides=%7B%7D&enabled_features=%5B%5D&disabled_features=%5B%5D&locale=en&utm_source=&utm_medium=widget_new&utm_campaign=chart&utm_term=BITSTAMP%3ABTCUSD"
      height="600"
      width="100%"
      style={{ border: "none" }}
      allowFullScreen
    ></iframe>
  </div>
);

export default TradingViewChart;
