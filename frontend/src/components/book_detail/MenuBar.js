import React from 'react';
import styled from 'styled-components';

class MenuBar extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Div>
			</Div>
		);
	}
}

const Div = styled.div`
	margin: 20px;
	display: flex;
	flex-direction: row;
	background-color: pink;
`;


export default MenuBar;