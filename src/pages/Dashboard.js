import React, { useState } from 'react';
import { Cards, Search } from '../components';
import { Admin } from './Admin';
import '../styles/Dashboard.scss';
import Logo from '../assets/shpe/transparentBbq.png';

export const Dashboard = () => {
	const [activeTab, setActiveTab] = useState('dayOne');
	const [searchInput, setSearchInput] = useState('');
	const [filterInput, setFilterInput] = useState({});
	// filterInput = { major: [], position: [], industry: [] };
	let handleSearch = (e) => setSearchInput(e.target.value);
	let handleFilter = (tags) => setFilterInput(tags);

	const Nav = () => {
		return (
			<div className = 'navBar'>
				<div className = 'logo'>
					<img src = { Logo } alt = 'SHPE Industy BBQ' width = '150' height = '80'></img>
				</div>
				<ul>
					<div onClick = { () => setActiveTab('dayOne') }>
						<li className = { activeTab === 'dayOne' ? 'active' : '' }> Day 1 </li>
					</div>
					<div onClick = { () => setActiveTab('dayTwo') }>
						<li className = { activeTab === 'dayTwo' ? 'active' : '' }> Day 2 </li>
					</div>
					<div onClick = { () => { setActiveTab('admin') } }>
						<li className = { activeTab === 'admin' ? 'active' : '' }> Admin </li>
					</div>
				</ul>
				<div className = 'meta'>
					 Brought to you by <br></br>
					 <a className = 'ref' target = '_blank' href = 'https://tech.shpeucf.com/' > SHPE UCF Tech Committee</a>
				</div>
			</div>
		);
	};

	return (
		<div className = 'outerWrap'>
			<div className = 'App'>
				{ Nav() }
				<div className = 'main'>
					<div className = 'upperNav'>
						<Search input = { handleSearch } filters = { handleFilter } />
					</div>
					{ activeTab === 'admin'
						? <Admin />
						: <Cards data = { activeTab } search = { searchInput } tags = { filterInput } />
					}
				</div>
			</div>
		</div>
	);
};