import React from 'react'
import PropTypes from 'prop-types'
import './Footer2.css';
import FooterMenu from '../FooterMenuLink/FooterMenuLink'
import {BrowserRouter as Router} from 'react-router-dom'; 
import FooterLink from '../FooterLink/FooterLink';

export const Footer2=({FooterTitle,CopyRightText,BottomContent,SocialIcons,FooterMenuData}) => {
    return (
        <div>
            <div className="Footer2">
                <div className="layer1">
                    <div className="left">
                        <h4>{FooterTitle} </h4>
                        <h6>{CopyRightText}</h6>
                    </div>
                    <div className="right">
                        <Router>
                            {SocialIcons.map((item,index)=>
                                <div key={index}>
                                    <FooterLink 
                                        logoImg={item.src}
                                        logoUrl={item.src}
                                        logoAlt={item.title}
                                    />
                                </div>
                            )}
                        </Router>
                    </div>
                </div>  <br></br>
                <div className="layer2">
                    {FooterMenuData.map((item,index)=>
                        <div key={index}>
                            <FooterMenu 
                                FooterMenuTitles={item.title}                           
                                FooterMenuLinks={item.href}
                            />
                        </div>
                    )}
                </div> <br></br>             
                <div className="layer3">
                    <p> <small>{BottomContent}</small></p>
                </div>
            </div>
               
        </div>
    )
}

Footer2.propTypes = {
    FooterTitle: PropTypes.string,
    CopyRightText: PropTypes.string,
    SocialIcons:PropTypes.array,
    FooterMenuData:PropTypes.array,
    BottomContent: PropTypes.string
}

Footer2.defaultProps = {
    FooterTitle:"giffgaff runs on the O2 network",
    CopyRightText:"Copyright &#169; 2020 giffgaff",
    BottomContent:"giffgaff Limited is authorised and regulated by the Financial Conduct Authority and is listed on the Financial Services Register. Firm Reference Number - 680957. Registered address – giffgaff Limited, 260 Bath Road, Slough SL1 4DX. Company Number - 04196996.",
    SocialIcons:[
        {
            "src":"https://cdn.pixabay.com/photo/2020/09/21/09/33/rose-5589514__340.jpg",
            "title":"Switch To Celcom Mega for Unlimited or lightoning speed internet",
            "description":"The first postpaid plan in Malasiya that allows you to trade in your unused internet quota for boost Cashback"
        },
        {
            "src":"https://cdn.pixabay.com/photo/2020/09/21/21/24/landscape-5591270__340.jpg",
            "title":"Switch To Celcom Mega for Unlimited or lightoning speed internet",
            "description":"The first postpaid plan in Malasiya that allows you to trade in your unused internet quota for boost Cashback"
        },
        {
            "src":"https://cdn.pixabay.com/photo/2020/09/18/13/05/lynx-5581792__340.jpg",
            "title":"Switch To Celcom Mega for Unlimited or lightoning speed internet",
            "description":"The first postpaid plan in Malasiya that allows you to trade in your unused internet quota for boost Cashback"
        },
        {
            "src":"https://cdn.pixabay.com/photo/2020/09/24/16/12/roosters-5599141__340.jpg",
            "title":"Switch To Celcom Mega for Unlimited or lightoning speed internet",
            "description":"The first postpaid plan in Malasiya that allows you to trade in your unused internet quota for boost Cashback"
        },
        {
            "src":"https://cdn.pixabay.com/photo/2020/09/21/16/08/seascape-5590487__340.jpg",
            "title":"Switch To Celcom Mega for Unlimited or lightoning speed internet",
            "description":"The first postpaid plan in Malasiya that allows you to trade in your unused internet quota for boost Cashback"
        },
        {
            "src":"https://cdn.pixabay.com/photo/2020/09/11/17/01/landscape-5563684__340.jpg",
            "title":"Switch To Celcom Mega for Unlimited or lightoning speed internet",
            "description":"The first postpaid plan in Malasiya that allows you to trade in your unused internet quota for boost Cashback"
        },
        {
            "src":"https://cdn.pixabay.com/photo/2020/09/22/07/27/gaillardia-5592172__340.jpg",
            "title":"Switch To Celcom Mega for Unlimited or lightoning speed internet",
            "description":"The first postpaid plan in Malasiya that allows you to trade in your unused internet quota for boost Cashback"
        },
        {
            "src":"https://cdn.pixabay.com/photo/2020/09/27/12/21/children-5606512__340.jpg",
            "title":"Switch To Celcom Mega for Unlimited or lightoning speed internet",
            "description":"The first postpaid plan in Malasiya that allows you to trade in your unused internet quota for boost Cashback"
        }
    ],
    FooterMenuData:[ 
        {
            "title":"About us",
            "href":"abc.com"
        },
        {
            "title":"Accessibility",
            "href":"abcd.com"
        },
        {
            "title": "Affliates",
            "href":"nhju.com"
        },
        {
            "title":"jobs",
            "href":"ljfs.com"
        },
        {
            "title":"Contact us",
            "href":"ljfs.com"
        },   
    
        {
            "title":"Mobile App",
            "href":"ljfs.com"
        },
        {
            "title":"Terms and Conditions",
            "href":"ljfs.com"
        },
        {
            "title":"Privacy policy",
            "href":"ljfs.com"
        },   
    
        {
            "title":"cookie policy",
            "href":"ljfs.com"
        },
        {
            "title":"Modern Salivary statement",
            "href":"ljfs.com"
        }
     ]

    
    
}

export default Footer2
