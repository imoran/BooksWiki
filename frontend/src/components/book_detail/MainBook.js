import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { requestSingleBook } from '../../actions/book_actions';


class MainBook extends React.Component {
	constructor(props) {
		super(props);
	}

	componentWillMount() {
		this.props.requestSingleBook(this.props.id);
	}

	render() {
		return (
			<Div>
				{this.props.book.title}
			</Div>
		);
	}
}

const Div = styled.div`
	width: 60%;
	height: 500px;
	background-color: blue;
`;

const mapStateToProps = (state, ownProps) => ({
	book: state.entities.books
});

const mapDispatchToProps = (id) => dispatch => ({
	requestSingleBook: (id) => dispatch(requestSingleBook(id))
});


export default connect(mapStateToProps, mapDispatchToProps)(MainBook);
// export default MainBook;
