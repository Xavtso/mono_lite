import {useEffect} from 'react'
import Features from "./Features";
import '../../styles/home-page/Sections.css'
import Operations from "./Operations";
import Testimonial from './Testimonial';


const Sections = function () {

    
    return (
        <>
        <Features/>
            <Operations />
            <Testimonial/>
        </>
        

    )
}

export default Sections;