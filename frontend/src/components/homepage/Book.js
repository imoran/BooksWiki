import React from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

class Book extends React.Component {
	constructor(props) {
		super(props);
	}

	bookProfile(id) {
		return () => {
			this.props.history.push(`/books/${id}`);
		};
	}

	render() {
		const { book } = this.props;
		return (
			<Div>
				<Img
					onClick={this.bookProfile(book.id)}
					src={book.img_url}/>
				<Title />
				{this.props.book.title}
			</Div>
		);
	}
}

const Img = styled.img`
	width: 130px;
	height: 160px;
	border: 1px solid black;
	&:hover {
		cursor: pointer;
	}
`;
const Title = styled.p`
	font-size: 10px;
`;
const Div = styled.div`
	text-align: center;
	width: 150px;
	height: 200px;
	margin: 20px;
`;

export default withRouter(Book);
