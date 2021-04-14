import React from 'react'
import './BoothForSale.css';

const BoothForSale = ({booth}) => {

    return (
      <div className="BoothForSale_container">
        <h2 className="BoothForSale_title">Booth {booth} is available!</h2>
        <p className="BoothForSale_text">The area of the booth is approximately: <br />200 sq. ft.</p>
        <p className="BoothForSale_text">To make reservations for this booth, <br />call 714-979-2576 x143 for more information, or email at info@thelandscapeexpo.com</p>
      </div>
    )
}

export default BoothForSale
