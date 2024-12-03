import { useContext, useEffect, useState } from 'react';
import './HomeDisplay.css';
import { DataProviderContext } from 'src/App';
import { HomeCard } from './HomeCard';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { message } from 'antd';

export interface HomeDisplayInterface {
  houses: House[];
}

/** Component used to dispplay the housings */
const HomeDisplay = ({ houses }: HomeDisplayInterface) => {
  return (
    <div className="homes-display-container">
      {houses.map((house) => (
        <HomeCard house={house} key={house.id} />
      ))}
    </div>
  );
};

export default HomeDisplay;
