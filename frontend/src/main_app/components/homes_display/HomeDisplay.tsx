import { useContext, useEffect, useState } from 'react';
import './HomeDisplay.css';
import { DataProviderContext } from 'src/App';
import { HomeCard } from './HomeCard';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { message } from 'antd';

/** Component used to dispplay the housings */
const HomeDisplay = () => {
    const [houses, setHouses] = useState<House[]>([]);
    const dataProvider = useContext(DataProviderContext);

    /**
     * Function used to query all the availabel houses from the backend
     */
    const queryHouses = async () => {
        try {
            const housesData = await dataProvider.getHouses();
            setHouses(housesData);
        } catch (error) {
            message.error('Houses could not be loaded');
        }
    };

    /** Loads intial housings */
    useEffect(() => {
        queryHouses();
    }, []);

    return (
        <div className="homes-display-container">
            {houses.map((house) => (
                <HomeCard house={house} key={house.id} />
            ))}
        </div>
    );
};

export default HomeDisplay;
