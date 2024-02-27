import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { fetchTrendingCoins } from "../utils/coingecko";

const TrendingCoinsCarousel = () => {
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    const getCoins = async () => {
      const data = await fetchTrendingCoins();
      setCoins(data);
    };

    getCoins();
  }, []);

  return (
    <Swiper slidesPerView={"auto"} spaceBetween={30}>
      {coins.map((coin, index) => (
        <SwiperSlide key={index}>
          <div>
            <img src={coin.item.small} alt={coin.item.name} />
            <p>
              {coin.item.name} ({coin.item.symbol.toUpperCase()})
            </p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TrendingCoinsCarousel;
