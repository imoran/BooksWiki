import React from 'react'
import styled from 'styled-components';
import { connect } from 'react-redux';
import { requestAllBooks } from '../../actions/book_actions';
import Header from './header';


class Homepage extends React.Component {
	constructor(props) {
		super(props);
	}
	componentWillMount() {
		this.props.requestAllBooks();
	}
	render() {
		return (
			<div>
				<Header />
			</div>
		);
	}
}


const mapStateToProps = (state) => ({
	books: state.entities.books
});

const mapDispatchToProps = dispatch => ({
	requestAllBooks: () => dispatch(requestAllBooks())
});

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);
