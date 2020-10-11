import React from 'react'
import './Footer.css'
import {BrowserRouter as Router,Link} from 'react-router-dom'; 
export default function Footer({links}) {
    return (
        <div>
            <div className="Footer">
                <div className="Footers">
                    <div className="Footer-logo">
                        <img src="https://www.vodafoneidea.com/content/dam/vodafone-microsite/images/micrositeimages/newhomepageicon/Vi.svg" alt="img logo" />
                    </div>
                </div>
                <div className="Footers">
                   <h4>About Vodafone !dea</h4>
                </div>
                <div className="Footers">
                    <h4>Importants Links</h4>
                </div>
                <div className="Footers">
                    <h4>Contact Us</h4>
                </div>
                <div className="Footers">
                    <h4>VodaFone Idea Limited</h4>
                Vodafone Idea Limited is an Aditya Birla Group and Vodafone Group partnership. The Company provides pan India Voice and Data services across 2G, 3G and 4G platform.
                </div>
                <div className="Footers">
                    <div className="FooterLinks">
                        <Router>
                            <Link>Privacy Ploicy</Link>
                            <Link>Terms and conditions</Link>
                            <Link>FAQs</Link>
                            <Link>Suppliers and Partners</Link>
                            <Link>Contact Us</Link>
                        </Router>
                    </div>                   
                </div>
                <div className="Footers">
                    <div className="FooterLinks">
                        <Router>
                            <Link>Vodafone Group</Link>
                            <Link>Aditya Birla Group</Link>
                            <Link>www.mygov.in</Link>
                            <Link>www.ddoj.ggov.in</Link>                       
                        </Router>
                    </div>
                </div>
                <div className="Footers">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d3781.5915315841235!2d73.7447765!3d18.5924452!3m2!1i1024!2i768!4f13.1!3m2!1m1!2sVodafone%20Idea%20limited!5e0!3m2!1sen!2sin!4v1602126805357!5m2!1sen!2sin" ></iframe>
                    <h5>Telephone: +91 79 6671 4000  </h5>
                    <h5>Fax: +91 79 2323 225100  </h5>
                </div>                
            </div>
            <div className="FooterBottom">
                <div className="FooterBottoms">
                    <p>This website uses its own third-party cookies. Find out more about usage in our <span> <Router><Link>Privacy Ploicy</Link></Router></span> page. Copyright Reserved with Vodafone Idea Limited (formerly Idea Cellular Limited).Vodafone Idea Limited (Formerly Idea Cellular Limited), An Aditya Birla Group & Vodafone partnership, Suman Towers, Plot No.18, Sector 11, Gandhinagar – 382011, Gujarat.CIN L32100GJ1996PLC030976, T: +91-796671 4000, F: +91-79 2323 2251</p>
                </div>
                <div className="FooterBottoms">
                    <h2>CIN: L32100GJ1996PLC030976</h2>
                </div>
            </div>
        </div>
    )
}
