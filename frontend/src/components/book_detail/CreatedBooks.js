import React from 'react';
import styled from 'styled-components';

class CreatedBooks extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Div>
				CreatedBooks
			</Div>
		);
	}
}

const Div = styled.div`
	width: 20%;
	height: 500px;
	background-color: red;
`;

export default CreatedBooks;
