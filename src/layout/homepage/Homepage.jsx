import {useContext, useState} from 'react'

import { GlobalContext } from '../../GlobalContext';
import Slides from "./Slides";
import BestSales from './BestSales';

import "./homepage.scss"

const Homepage = () => {
    const {slideShow,bestSales,portfolio} =useContext(GlobalContext)
    return(
        <div className="homepage">
            <Slides slideShow={slideShow} />
            <BestSales bestSales={bestSales} />
        </div>
    )
}

export default Homepage;