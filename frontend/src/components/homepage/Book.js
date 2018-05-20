import React from 'react';
import styled from 'styled-components';

class Book extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		const { book } = this.props;
		return (
			<Div>
				<Img src={book.img_url}/>
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

export default Book;
