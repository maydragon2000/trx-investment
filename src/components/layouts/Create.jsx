import React from 'react';
import { Link } from 'react-router-dom'
import icon1 from '../../assets/images/icon/Wallet.png'
import icon2 from '../../assets/images/icon/Category.png'
import icon3 from '../../assets/images/icon/Image2.png'
import icon4 from '../../assets/images/icon/Bookmark.png'

const Create = () => {
    const data = [
        {
            title: "Subscriptions (0)",
            description: "Trx supplied from subscriptions.",
            icon: icon1,
            colorbg: "icon-color1"
        },
        {
            title: "Referrals (0)",
            description: "Profit generated over referrals.",
            icon: icon2,
            colorbg: "icon-color2"
        },
        {
            title: "Withdrawals (0)",
            description: "Trx Withdrawal from wallet.",
            icon: icon3,
            colorbg: "icon-color3"
        },
        {
            title: "Generated",
            description: "Profit generated over subscriptions.",
            icon: icon4,
            colorbg: "icon-color4"
        },
    ]
    return (
        <section className="tf-box-icon create style1 tf-section">
            <div className="themesflat-container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="heading-live-auctions mg-bt-22">
                            <h2 className="tf-title pb-17">
                                History</h2>
                        </div>
                    </div>
                    {
                        data.map((item, index) => (
                            <CreateItem key={index} item={item} />
                        ))
                    }
                </div>
            </div>
        </section>
    );
}

const CreateItem = props => (
    <div className='col-lg-3 col-md-6 col-12'>
        <div className="sc-box-icon">
            <div className="image">
                <div className={`icon-create ${props.item.colorbg}`}>
                    <img src={props.item.icon} alt="" />
                </div>
            </div>
            <h3 className="heading"><Link to="/wallet-connect">{props.item.title}</Link></h3>
            <p className="content">{props.item.description}</p>
        </div>
    </div>
)

export default Create;
