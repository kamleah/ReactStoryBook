import React, { Component } from 'react'
import './BuynowCard.css'
import BannerSlider from '../BannerSlider/BannerSlider'
//import { BannerSlider } from '../BannerSlider/BannnerSlider.stories'
import PropTypes from 'prop-types'
export default class BuynowCard extends Component {
    // constructor(props) {
    //     super(props){

    //     }
    //   }
    render() {
        return (
            <div>
                <div className="cards">
                    <div className="card-top">
                        <div className="card-img">
                            <img src="https://m.media-amazon.com/images/I/61tuQdl2yLL._AC_UY218_.jpg" alt="abc"></img>
                        </div>
                        <div className="card-details">
                            <div className="card-badget">
                                <h4>New Phone</h4>
                            </div>
                            <div className="details">
                                <h4>Samasung Galaxy Note20 Ultra 5g</h4>
                                <p>RRP RMS 199.00</p>
                            </div>
                        </div>
                    </div>
                    <div className="card-bottom">
                        <div className="card-botton-left">
                            <h4>EasyPhone<sup>TM</sup> OWN</h4>
                            <p>From</p>
                            <h3>RM129</h3>
                            <p>/month</p>
                        </div>
                        <div className="card-botton-right">
                            <h4>Device Bundle</h4>
                            <p>From</p>
                            <h3>RM2998</h3>
                            <p>/month</p>
                        </div>
                    </div>
                    <div>
                        <button className="buyNow">Buy Now</button>
                    </div>
                </div>
            </div>
        )
    }
}


