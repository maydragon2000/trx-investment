import React from 'react';

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import "../../assets/css/withdraw.css"

const Withdraw = () => {
    return (
        <section className="tf-section top-seller withdraw">
            <div className="themesflat-container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="heading-live-auctions">
                            <h2 className="tf-title">
                                Withdraw</h2>
                        </div>
                    </div>
                    <div className='col-md-12 withdraw'>
                        <input type="text" placeholder='Enter Amount to Withdraw' />
                        <input type="text" placeholder='Enter your wallet address' />
                        <button>Submit</button>
                    </div>
                </div>
            </div>
        </section>
    );
}


export default Withdraw;
