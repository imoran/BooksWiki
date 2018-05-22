import React from 'react';
import styled, { css } from 'styled-components';
import Modal from './auth/modal';
import { connect } from 'react-redux';
import { openModal } from '../../actions/modal_actions';

class Navbar extends React.Component {
	constructor(props) {
		super(props);
		console.log("Navbar props => ", this.props);
	}
	render() {
		return (
			<Nav>
				<Modal />
				<Img />
				<Div>
					<Button primary>Demo User</Button>
					<Button onClick={() => this.props.openModal('login')} >Login</Button>
					<Button onClick={() => this.props.openModal('signup')} >Sign up</Button>
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


const mapDispatchToProps = dispatch => ({
	openModal: modal => dispatch(openModal(modal))
});

export default connect(null, mapDispatchToProps)(Navbar);
