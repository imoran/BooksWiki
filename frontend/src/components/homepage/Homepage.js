import React from 'react'
import styled from 'styled-components';
import Header from './Header';
import Main from './Main';


class Homepage extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div>
				<Header />
				<Main />
			</div>
		);
	}
}

export default Homepage;
