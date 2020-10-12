import React from 'react'
import './Footer.css'
import FooterMenu from '../FooterMenuLink/FooterMenuLink'
import PropTypes from 'prop-types'


export const  Footer = ({ImportantLinks,SubFooterMenuData,FooterTitle,FooterText,SocialIcons, FooterMenuData,BottomContent, FooterLogo,map,telephone,fax,CIN}) => {
    return (
        <div>
            <div className="Footer">
                <div className="Footers">
                    <div className="Footer-logo">
                        <img src={FooterLogo} alt="img logo" />
                    </div>
                </div>
                {
                    FooterMenuData.map((item,index)=>
                        <div className="Footers" key={index}>
                            <h4>{item.footerMenu}</h4>
                        </div>
                    )
                }
                
                <div className="Footers">
                    <h4>{FooterTitle}</h4>
                    {FooterText}
                </div>
                <div className="Footers">
                    <div className="FooterLinks">
                    {
                        SubFooterMenuData.map((item,index)=>
                            <div key={index}>
                                <FooterMenu
                                    FooterMenuTitles={item.title}                           
                                    FooterMenuLinks={item.href} 
                                />
                            </div>
                        )}
                    </div>                   
                </div>
                <div className="Footers">
                    <div className="FooterLinks">
                    {                               
                        ImportantLinks.map((item,index)=>
                            <div key={index}>
                                <FooterMenu
                                    FooterMenuTitles={item.title}                           
                                    FooterMenuLinks={item.href} 
                                />
                            </div>
                        )}
                    </div>
                </div>
                <div className="Footers">
                    <iframe src={map} />
                    <h5>Telephone: {telephone}  </h5>
                    <h5>Fax: {fax}  </h5>
                </div>                
            </div>
             <div className="FooterBottom">
                <div className="FooterBottoms">
                    <p>{BottomContent}</p>
                </div>
                <div className="FooterBottoms">
                    <h2>{CIN}</h2>
                </div>
            </div>
        </div>
    )
}


Footer.propTypes = {
    FooterTitle: PropTypes.string,    
    FooterMenuData:PropTypes.array,
    BottomContent: PropTypes.string,
    FooterLogo:PropTypes.string,
    ImportantLinks:PropTypes.string,
    SubFooterMenuData:PropTypes.string,
    boo:PropTypes.string,
    CIN:PropTypes.string
}

Footer.defaultProps = {
    CIN:"CIN: L32100GJ1996PLC030976",
    boo:"This website uses its own third-party cookies. Find out more about usage in our <span> <Router><Link>Privacy Ploicy</Link></Router></span> page. Copyright Reserved with Vodafone Idea Limited (formerly Idea Cellular Limited).Vodafone Idea Limited (Formerly Idea Cellular Limited), An Aditya Birla Group & Vodafone partnership, Suman Towers, Plot No.18, Sector 11, Gandhinagar – 382011, Gujarat.CIN L32100GJ1996PLC030976, T: +91-796671 4000, F: +91-79 2323 2251",
    FooterLogo:"https://www.vodafoneidea.com/content/dam/vodafone-microsite/images/micrositeimages/newhomepageicon/Vi.svg",
    FooterTitle:"VodaFone Idea Limited",
    FooterText:"Vodafone Idea Limited is an Aditya Birla Group and Vodafone Group partnership. The Company provides pan India Voice and Data services across 2G, 3G and 4G platform.",
    BottomContent:"This website uses its own third-party cookies. Find out more about usage in our Privacy Ploicy page. Copyright Reserved with Vodafone Idea Limited (formerly Idea Cellular Limited).Vodafone Idea Limited (Formerly Idea Cellular Limited), An Aditya Birla Group & Vodafone partnership, Suman Towers, Plot No.18, Sector 11, Gandhinagar – 382011, Gujarat.CIN L32100GJ1996PLC030976, T: +91-796671 4000, F: +91-79 2323 2251",
    map:"https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d3781.5915315841235!2d73.7447765!3d18.5924452!3m2!1i1024!2i768!4f13.1!3m2!1m1!2sVodafone%20Idea%20limited!5e0!3m2!1sen!2sin!4v1602126805357!5m2!1sen!2sin",
    telephone:"+91 79 6671 4000",
    fax:"+91 79 2323 225100",

    FooterMenuData:[ 
        
        {
            "footerMenu":"About Vodafone !dea",
            "title":"About us",
            "href":"abc.com",
            
        },
        {
            "footerMenu":"Importants Links",
            "title":"Accessibility",
            "href":"abcd.com"
        },
        {
            "footerMenu":"Contact Us",
            "title": "Affliates",
            "href":"nhju.com"
        }
        
     ],
     SubFooterMenuData:[
        {
            "title":"Privacy Policy",
            "url":"abc.com"
        },
        {
            "title":"Terms and Conditions",
            "url":"abc.com"
        },
        {
            "title":"FAQs",
            "url":"abc.com"
        },
        {
            "title":"Suppliers and Partners",
            "url":"abc.com"
        },
        {
            "title":"Contact Us",
            "url":"abc.com"
        }
    ],
    ImportantLinks:[
        {
            "title":"VodaFone Group",
            "url":"abc.com"
        },
        {
            "title":"Aditya Birla Group",
            "url":"abc.com"
        },
        {
            "title":"www.mygov.in",
            "url":"abc.com"
        },
        {
            "title":"www.ddog.ggov.in",
            "url":"abc.com"
        },
        
    ]


    
    
}

export default Footer
