import React, { useState } from 'react';
import { Cards, Search } from '../components';
import { Admin } from './Admin';
import Logo from '../assets/shpe/shpeucflogo_bb.svg';
import Odi from '../assets/shpe/cecs-odi.png';
import Services from '../assets/shpe/career-services.png';
import '../styles/Dashboard.scss';
import {
    Button,
    colors,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle
} from '@material-ui/core/';


export const About = () => {
    return (
        <div style={{color: 'white'}}>
            <h1 style={{color: '#FFC107'}}> SHPE JR </h1>
            <h2>Leading Hispanics in STEM</h2>
            <p>SHPE is the nation’s largest association dedicated to fostering Hispanic leadership in the STEM field.</p>
            <h2>What we are:</h2>
            <p>Society of Hispanic Professional Engineers (SHPE) Jr is a STEM based initiative set forward to inspire local high school students to achieve their highest potential and pursue post-secondary education. Members from SHPE UCF volunteer their time to meet with these students and offer their experience, put on technical workshops, and mentorship. Parents and students benefit from college prep workshops designed to educate them on the process of applying to college and looking for financial aid. Through UCF SHPE Jr, students receive the benefits of working first hand with UCF students and receiving valuable insight in learning how to better prepare themselves to take on new challenges and optimizing their own college experience. The UCF SHPE Jr chapter is one of the largest in the region and is always expanding. The chapter currently is composed of three Jr chapters based in Cypress Creek High, University High, and Olympia High. This year, UCF SHPE Jr is excited to announce a newly established collaboration with the Embry Riddle SHPE Jr chapter, which will bring upon a new level of networking and friendly competition for all members.</p> 
            <h2>What we do:</h2>
            <p>Several interactive events throughout the school year are aimed to expose students to the various aspects of the STEM field such as trips to the Orlando Science Center, Lockheed Martin facilities, and Noches de Ciencias. The continuous involvement in outreach programs exposes students to scenarios in which they develop their leadership, communication, and teamwork skills. The end of the year SHPE JR Conference is designed to showcase the student’s ability on taking on several technical challenges and is sponsored by leading companies ( Lockheed Martin and more). This is a conference hosted only by the UCF chapter and one of the many SHPE UCF initiatives set to further stimulate young minds in STEM. The students come back with renewed sense of excitement for understanding the world around them.</p>
            <h2>Our Mission</h2>
            <p>To change lives by empowering the Hispanic community to realize its fullest potential and to impact the world through STEM awareness, access, support and development.</p>
        </div>
      
    )
}