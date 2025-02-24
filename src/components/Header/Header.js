import React from 'react';
import './Header.css';
 const Header=(props)=>{
    return(
        <div className="header-container">
            <h1>Student Manager</h1>
            <p>All students:{props.length}</p>
        </div>
    );
 }

 export default Header;