import React, { useEffect, useState } from "react";
import styles from "./BitcoinPrice.module.css";

import { fetchBitcoinPricee } from "../utils/coingecko";

const BitcoinPrice = () => {
  const [price, setPrice] = useState({ usd: 0, inr: 0, usd_24h_change: 0 });

  useEffect(() => {
    const getPrice = async () => {
      const data = await fetchBitcoinPricee();
      if (data) setPrice(data);
    };

    getPrice();
  }, []);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Bitcoin Price</h2>
      <p className={styles.price}>
        USD: ${price.usd} ({price.usd_24h_change.toFixed(2)}%)
      </p>
      <p className={styles.price}>
        INR: ₹{price.inr} ({price.usd_24h_change.toFixed(2)}%)
      </p>
    </div>
  );
};

export default BitcoinPrice;
