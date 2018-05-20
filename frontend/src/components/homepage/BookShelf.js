import React from 'react';
import styled from 'styled-components';

class BookShelf extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<Div>
				BookShelf
			</Div>
		);
	}
}

const Div = styled.div`
	width: 17.5%;
	background-color: lightblue;
`;

export default BookShelf;
