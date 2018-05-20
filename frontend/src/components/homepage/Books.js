import React from 'react';
import { connect } from 'react-redux';
import { requestAllBooks } from '../../actions/book_actions';
import styled from 'styled-components';
import Book from './Book';

class Books extends React.Component {
	componentWillMount() {
		this.props.requestAllBooks()
	}
	constructor(props) {
		super(props);
		// this.state = {
		// 	books: props
		// }
		console.log(props);
	}
	render() {
		return (
			<Div>

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


const mapStateToProps = (state) => ({
	books: state.entities.books
});

const mapDispatchToProps = dispatch => ({
	requestAllBooks: () => dispatch(requestAllBooks())
});

export default connect(mapStateToProps, mapDispatchToProps)(Books);
