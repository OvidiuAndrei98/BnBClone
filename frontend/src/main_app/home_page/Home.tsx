import React from 'react';
import FilterSlider from '../components/filter_slider/FilterSlider';
import HomeDisplay from '../components/homes_display/HomeDisplay';

const Home = () => {
    return (
        <div className="home-container">
            <FilterSlider />
            <HomeDisplay />
        </div>
    );
};

export default Home;
