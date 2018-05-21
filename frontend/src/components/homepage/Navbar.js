import React from 'react'
import styled, { css } from 'styled-components';


class Navbar extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<Nav>
				<Img />
				<Div>
					<Button primary>Demo User</Button>
					<Button>Login</Button>
					<Button>Signup</Button>
				</Div>
			</Nav>
		);
	}
}


const Nav = styled.nav`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	height: 100px;
	width: 100%;
`;

const Div = styled.div`
	text-align: right;
`;

const Button = styled.a`
	display: inline-block;
	border-radius: 3px;
	padding: .5rem 1rem;
	margin: 1rem;
	background: transparent;
	color: black;
	font-size: 20px;
	&:hover {
		background: #02C39A;
		cursor: pointer;
		color: white;
	}
	&:active {
		background: #00A896;
		color: white;
	}
`;

const Img = styled.img.attrs({
	src: "http://localhost:3000/public/images/logo.png"
})`
	width: 60px;
	height: 60px;
	margin: .5rem;
`;

export default Navbar;
