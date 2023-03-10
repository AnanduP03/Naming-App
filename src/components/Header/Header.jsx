import React from 'react';
import './Header.css'

const Header=(props)=>{
    return (
        <div className="head-container">
            <img className={`head-image ${props.headerExpanded?`head-image-expanded`:`head-image-contracted`}`} src="https://user-images.githubusercontent.com/26179770/106359099-693e3380-6336-11eb-8069-9e36f25de5ca.png" alt="header-img"></img>
            <h1 className={`head-text ${props.headerExpanded?`head-text-expanded`:`head-text-contracted`}`}>{props.headTitle}</h1>
        </div>
    )
}

export default Header;