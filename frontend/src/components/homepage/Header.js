import React from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';

class Header extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<Div>
				<Navbar />
				<Title>BooksWiki</Title>
			</Div>
		);
	}
}

const Div = styled.div`
	background: url("http://localhost:3000/public/images/book.jpg");
	background-position: 0% 80%;
	height: 400px;
	background-repeat: no-repeat;
	background-size: cover;
`;

const Title = styled.h1`
	color: white;
	font-size: 70px;
	display: flex;
	justify-content: center;
`;

export default Header;
