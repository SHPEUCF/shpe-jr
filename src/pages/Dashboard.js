import React, { useState } from 'react';
import { Cards, Search } from '../components';
import { Admin } from './Admin';
import { About } from './About';
import Logo from '../assets/shpe/shpeucflogo_bb.svg';
import Odi from '../assets/shpe/cecs-odi.png';
import Services from '../assets/shpe/career-services.png';
import ShpeJr from '../assets/shpe/openingDia.png';
import '../styles/Dashboard.scss';
import {
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogTitle
} from '@material-ui/core/';

export const Dashboard = () => {
	const [activeTab, setActiveTab] = useState('dayOne');
	const [searchInput, setSearchInput] = useState('');
	const [filterInput, setFilterInput] = useState({});
	const [video, setVideo] = useState(true);

	let handleSearch = (e) => setSearchInput(e.target.value);
	let handleFilter = (tags) => setFilterInput(tags);

	const renderVideo = () => {
		return (
			<div>
				<Dialog
					open = { video }
					onClose = { () => setVideo(false) }
					fullWidth={true}
					maxWidth={'md'}
				>
					<DialogTitle>
						A Message from Our SHPE Jr. Director
					</DialogTitle>
					<DialogContent>
						<DialogContent>
							<img style={{height: '35vh', width: '65vh'}} src={ShpeJr}></img>
							<p>I’m so thrilled to welcome you to the first ever virtual SHPE Jr. Conference in the history of our chapter for the Society of Hispanic Professional Engineers (SHPE) at the University of Central Florida! The entire SHPE UCF E-Board and Board welcomes each and every one of you and wish you the best of experiences from this event.</p>
							<p>If you are currently are a high school freshman, sophomore, junior or senior, I ask you to please take as much advantage of this event. This event was specially made with you in mind to earn a major advantage over other students before even stepping foot on campus as a college freshman. These wonderful sponsors are here to give students like you an opportunity inpersonally getting to know professionals from the industry and providinginsight on what job opportunities are available in the industry as you prepare for your next step after high school. If by any chance you are planning to come to UCF after high school, don’t forget to stop by the UCF Office of Financial Aid Assistance booth to get any questions or concerns you mayhave related to financial aid resolved. We hope you make the most of this event in any of the booths you plan to join!</p>
							<p>To all of our participating sponsors:</p>
							<p>Thank you for taking the time out of your Saturday to inspire these high school students! This event would not have been possible without your endless support and we can’t wait to have you be a part of our future events!</p>
							<p>P.S. A special thanks to the SHPE UCF Tech Committee for making this virtual conference possible!</p>
						</DialogContent>
					</DialogContent>
					<DialogActions>
						<Button size = 'small' color = 'primary' onClick = { () => setVideo(false) }>
							Close
						</Button>
					</DialogActions>
				</Dialog>
			</div>
		);
	};

	const Nav = () => {
		return (
			<div className = 'navBar'>
				
				<ul>
					<div onClick = { () => setActiveTab('dayOne') }>
						<li className = { activeTab === 'dayOne' ? 'active' : '' }> Home </li>
					</div>
					<div onClick = { () => { setActiveTab('about') } }>
						<li className = { activeTab === 'about' ? 'active' : '' }> About </li>
					</div> 
				</ul>
				<div id = 'fadeshow' className = 'meta'>
					 Brought to you by <br></br>
					 <a className = 'ref' target = '_blank' href = 'https://github.com/SHPEUCF/' > SHPE UCF Tech Committee</a>
				</div>
			</div>
		);
	};

	return (
		<div>
			 { renderVideo() }
			<div className = 'App'>
				{ Nav() }
				<div className = 'main'>
					<div className = 'mainContent'>
						{ activeTab === 'about'
							? <About />
							: <Cards data = { activeTab } search = { searchInput } tags = { filterInput } />
						}
					</div>
				</div>
			</div>
		</div>
	);
};