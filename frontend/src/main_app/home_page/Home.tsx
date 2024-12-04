import React, { useContext, useEffect, useState } from 'react';
import FilterSlider from '../components/filter_slider/FilterSlider';
import HomeDisplay from '../components/homes_display/HomeDisplay';
import { DataProviderContext } from 'src/App';
import { message } from 'antd';

const Home = () => {
  const [houses, setHouses] = useState<House[]>([]);
  const [originalData, setOriginalData] = useState<House[]>([]);
  const dataProvider = useContext(DataProviderContext);

  /**
   * Function used to query all the availabel houses from the backend
   */
  const queryHouses = async () => {
    try {
      const housesData = await dataProvider.getHouses();
      setHouses(housesData);
      setOriginalData(housesData);
    } catch (error) {
      message.error('Houses could not be loaded');
    }
  };

  /** Loads intial housings */
  useEffect(() => {
    queryHouses();
  }, []);

  return (
    <div className="home-container">
      <FilterSlider houses={originalData} updateData={(houses) => setHouses(houses)} />
      <HomeDisplay houses={houses} />
    </div>
  );
};

export default Home;
