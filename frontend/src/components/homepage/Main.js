import React from 'react';
import styled from 'styled-components';
import Books from './Books';
import SearchBar from './SearchBar';
import BookShelf from './BookShelf';

class Main extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<Div>
				<SearchBar />
				<Books />
				<BookShelf />
			</Div>
		);
	}
}

const Div = styled.div`
	margin: 20px;
	display: flex;
	flex-direction: row;
`;

export default Main;
