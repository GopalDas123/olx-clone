import React from 'react'
import './Categories.css';
import { IoIosArrowDown } from "react-icons/io";

const Categories=()=> {
    return (
        <div className="cat">
            <div className="cat1">
                ALL CATEGORIES
                <IoIosArrowDown className="arrow"/>
            </div>
            <div className="cat2">
                <p>Mobile Phones</p>
                <p>Cars</p>
                <p>Motorcycles</p>
                <p>Houses</p>
                <p>TV-Video-Audio</p>
                <p>Tablets</p>
                <p>Land & Plots</p>
            </div>
        </div>
    )
}

export default Categories
