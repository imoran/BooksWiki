import React from 'react';
import styled from 'styled-components';

class Book extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<Div>
				{this.props.name}
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

export default Book;
