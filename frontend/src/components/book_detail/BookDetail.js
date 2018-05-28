import React from 'react';
import styled from 'styled-components';
import MenuBar from './MenuBar';
import MainBook from './MainBook';
import CreatedBooks from './CreatedBooks';


class BookDetail extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Div>
				<MenuBar />
				<MainBook id={this.props.match.params.bookId}/>
				<CreatedBooks />
			</Div>
		);
	}
}

const Div = styled.div`
	display: flex;
	flex-direction: row;
	background-color: red;
`;

// const mapStateToProps = (state, ownProps) => ({
// 	book: state.entities.books
// });
//
// const mapDispatchToProps = (id) => dispatch => ({
// 	requestSingleBook: (id) => dispatch(requestSingleBook(id))
// });

// export default connect(mapStateToProps, mapDispatchToProps)(BookDetail);

export default BookDetail;
