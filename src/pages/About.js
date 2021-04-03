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
            <h1 style={{color: '#FFC107'}}>About Us</h1>
            <h2>Who We Are</h2>
            <p>The Society of Hispanic Professional Engineers (SHPE) Junior Program is a STEM based initiative set forward to inspire local high school students to achieve their highest potential and pursue post-secondary education. Members from SHPE UCF volunteer their time to meet with these students and offer their experience, put on technical workshops, and mentorship. Parents and students benefit from college prep workshops designed to educate them on the process of applying to college and looking for financial aid.</p>
            <h2>What is SHPE</h2>
            <p>The Society of Hispanic Professional Engineers (SHPE) was founded in Los Angeles, California, in 1974 by a group of engineers employed by the city of Los Angeles. Their objective was to form a national organization of professional engineers to serve as role models in the Hispanic community. Today, SHPE enjoys a strong but independent network of professional and student chapters throughout the nation. </p>
            <p>Our chapter focuses on empowering the Hispanic population at UCF. For our members, we offer workshops, discussion panels, information sessions, and so much more to fully prepare our soon-to-be engineers for the real world. Among our duties is to serve as role models to the community. With this in mind, we conduct school visits to high schools through our SHPE Junior Program to present what technical professions are and how they affect our everyday life.</p> 
        </div>
      
    )
}