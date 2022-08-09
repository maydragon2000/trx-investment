import React, { useState, Fragment } from 'react';
import PropTypes from 'prop-types'

import CardModal from './CardModal'

import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import "../../assets/css/deposit.css"

const Deposit = () => {

    const [modalShow, setModalShow] = useState(false);

    return (
        <Fragment>
            <section className="tf-section live-auctions deposit">
                <div className="themesflat-container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="heading-live-auctions">
                                <h2 className="tf-title pb-20">
                                    Deposit</h2>
                                {/* <Link to="/explore-03" className="exp style2">EXPLORE MORE</Link> */}
                            </div>
                        </div>
                        <div className="col-md-12 deposit">
                            <h3>Admin Wallet Address</h3>
                            <h4>TAvJ4SAXaYrfLT64NP6C71dPMt2XbQXDoi</h4>
                            <div className='input-wrap'>
                                <input type="text" placeholder='Enter amount of TRONS' />
                            </div>
                            <div className='button-wrap'>
                                <button className='deposit-button'>Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <CardModal
                show={modalShow}
                onHide={() => setModalShow(false)}
            />
        </Fragment>

    );
}

Deposit.propTypes = {
    data: PropTypes.array.isRequired,
}


export default Deposit;
