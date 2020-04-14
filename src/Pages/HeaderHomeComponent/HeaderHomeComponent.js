import React from 'react';
import './HeadreHomeComponent.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutube, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons'


const HeaderHomeComponent = (props) => {
    return (
        <div className="App-header">
            <div className="headerComponent">
                <div className="titles">
                    <p className="margotSignature">
                        Margot Soria
          </p>
                    <p className="margotBelowSignature">
                        Chanteuse et Coach Vocale
          </p>
                </div>
                <div className="margotHeadImg">
                    <img src={props.margotHeadImage} className="App-logo" alt="logo" />
                </div>
            </div>
            <div className="social">
            <a className="external_links" href="https://www.youtube.com/channel/UCwXBMbJ9gtmZiyWtt1zpO0w"><FontAwesomeIcon icon={faYoutube} /></a>
            <a className="external_links" href="https://www.instagram.com/margotsoriart/"><FontAwesomeIcon icon={faInstagram} /></a>
            <a className="external_links" href="https://www.facebook.com/margot.soria.5"><FontAwesomeIcon icon={faFacebook} /></a>
            
           
            </div>
        </div>
    )
};
export default HeaderHomeComponent;