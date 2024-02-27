import axios from 'axios';

export const fetchBitcoinPricee = async () => {
  try {
    const response = await axios.get('https://api.coingecko.com/api/v3/simple/price', {
      params: {
        ids: 'bitcoin',
        vs_currencies: 'usd,inr',
        include_24hr_change: 'true',
      },
    });
    return response.data.bitcoin;
  } catch (error) {
    console.error('fetchBitcoinPrice error:', error);
    return null;
  }
};

export const fetchTrendingCoins = async () => {
  try {
    const response = await axios.get('https://api.coingecko.com/api/v3/search/trending');
    return response.data.coins.slice(0, 3); 
  } catch (error) {
    console.error('fetchTrendingCoins error:', error);
    return [];
  }
};
