import React from 'react';
import styled from 'styled-components';
import MenuBar from './MenuBar';
import MainBook from './MenuBar';
import CreatedBooks from './CreatedBooks';
import { connect } from 'react-redux';
import { requestSingleBook } from '../../actions/book_actions';


class BookDetail extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			book: {}
		};
	}

	componentWillMount() {
		console.log(this.props.match.params.bookId);
		// this.props.requestSingleBook(this.props.match.params.bookId)
		// .then(book => {
		// 	this.setState({book: book});
		// })
		// console.log("BOOKDETAILS STATE ===>", this.state);
	}

	componentWillReceiveProps(nextProps) {
    if (this.props.match.params.bookId !== nextProps.match.params.bookId) {
      this.props.requestSingleUser(nextProps.match.params.bookId);
    }
  }

	render() {
		console.log(this.state);
		return (
			<Div>
        <MenuBar />
        <MainBook />
        <CreatedBooks />
			</Div>
		);
	}
}

const Div = styled.div`
	margin: 20px;
	display: flex;
	flex-direction: row;
  background-color: green;
`;

const mapStateToProps = (state, ownProps) => ({
  book: state.entities.books[ownProps.match.params.bookId]
});

const mapDispatchToProps = dispatch => ({
	requestSingleBook: (book) => dispatch(requestSingleBook(book))
});

export default connect(mapStateToProps, mapDispatchToProps)(BookDetail);
