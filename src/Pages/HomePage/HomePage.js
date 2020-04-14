import React from "react";
import margotHeadImage from '../imgs/margotHeadPhoto2_web.png';

import HeaderHomeComponent from '../HeaderHomeComponent/HeaderHomeComponent';


const HomePage = () => {
    return (
        <div className="App">
            HOME PAGE
            <HeaderHomeComponent margotHeadImage={margotHeadImage}/>

        </div>
    );
};

export default HomePage;