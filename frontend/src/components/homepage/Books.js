import React from 'react';
import { connect } from 'react-redux';
import { requestAllBooks } from '../../actions/book_actions';
import { selectAllBooks } from '../../selectors/selectors';
import styled from 'styled-components';
import Book from './Book';

class Books extends React.Component {
	constructor(props) {
		super(props);
	}

	componentWillMount() {
		this.props.requestAllBooks();
	}

	render() {
		const { books } = this.props;
		return (
			<Div>
				{books.map(book => (
					<Book book={book} key={book.id} />
				))}
			</Div>
		);
	}
}

const Div = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	justify-content: center;
	width: 65%;
`;


const mapStateToProps = (state) => ({
	books: selectAllBooks(state)
});

const mapDispatchToProps = dispatch => ({
	requestAllBooks: () => dispatch(requestAllBooks())
});

export default connect(mapStateToProps, mapDispatchToProps)(Books);
