import React from 'react';
import styled from 'styled-components';

class MenuBar extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Div>
				MenuBar
			</Div>
		);
	}
}

const Div = styled.div`
	width: 20%;
	height: 500px;
	background-color: pink;
`;


export default MenuBar;
