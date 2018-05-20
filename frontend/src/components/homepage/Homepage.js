import React from 'react'
import styled from 'styled-components';
import { connect } from 'react-redux';
import { requestAllBooks } from '../../actions/book_actions';

const Button = styled.button`
  border-radius: 3px;
  padding: 0.25em 1em;
  margin: 0 1em;
  background: transparent;
  color: palevioletred;
  border: 2px solid palevioletred;
`;

class Homepage extends React.Component {
	constructor(props) {
		super(props);
		console.log("props => ", props);
		console.log("this.state => ", this.state);
	}

	componentWillMount() {
		this.props.requestAllBooks();
	}

	render() {
		return (
			<div>
				<Button>Normal Button</Button>
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
