import React from 'react';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import heroSliderData from '../assets/fake-data/data-slider';
import Slider from '../components/slider/Slider';
import Deposit from '../components/layouts/Deposit';
import Withdraw from '../components/layouts/Withdraw';
import Create from '../components/layouts/Create';

const Home01 = () => {

    return (
        <div className='home-1'>
            <Header />
            <Slider data={heroSliderData} />
            <Deposit />
            <Withdraw />
            <Create />
            <Footer />
        </div>
    );
}

export default Home01;
