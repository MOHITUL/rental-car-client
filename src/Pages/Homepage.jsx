import React from 'react';
import HeroSlider from '../Components/HeroSlider';
import WhyRent from '../Components/WhyRent';
import FeaturedCars from '../Components/FeaturedCars';

const Homepage = () => {
    return (
        <div>
            <HeroSlider/>
            <FeaturedCars/>
            <WhyRent/>
        </div>
    );
};

export default Homepage;