import React from 'react';
import BitcoinPrice from './Components/BitcoinPrice';
import TradingViewChart from './Components/TradingViewChart';
import TrendingCoinsCarousel from './Components/TrendingCoinsCarousel';


function App() {
  return (
  <div>
    <BitcoinPrice/>
    <TradingViewChart/>
    <TrendingCoinsCarousel/>
  </div>
  );
}

export default App;
