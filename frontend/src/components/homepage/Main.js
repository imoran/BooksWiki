import React from 'react';
import styled from 'styled-components';
import Books from './Books';

class Main extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<Div>
				<Books />
			</Div>
		);
	}
}

const Div = styled.div`
	color: white;
	font-size: 70px;
	display: flex;
	justify-content: center;
`;

export default Main;
