import React from "react";
import './NameCard.css';

const nameCheapUrl="https://www.namecheap.com/domains/registration/results/?domain="

const NameCard=({suggestedName})=>{
    return(
        <a className="card-link" target="_blank" rel="noopener noreferrer" href={`${nameCheapUrl}${suggestedName}`}>
            <div className="namecard-container">
                <p className="result-name">{suggestedName}</p>
            </div>
        </a>
    )
}

export default NameCard;