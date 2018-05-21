import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { requestSelectedBooks } from '../../actions/book_actions';
import { selectAllBooks } from '../../selectors/selectors';


class SearchBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			'title': ''
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit() {
		this.props.requestSelectedBooks(this.state)
	}

	handleChange(e) {
		this.setState({ title: e.target.value });
	}

	render() {
		return (
			<Div>
				<Span>Search</Span>
				<InputGroup>
					<Input
						placeholder="Search By Title"
						value={this.state.title}
						onChange={this.handleChange}
						/>
					<Magnify
						onClick={this.handleSubmit}
					/>
				</InputGroup>
			</Div>
		);
	}
}

const Magnify = styled.img.attrs({
	src: "http://localhost:3000/public/images/search.png"
})`
	width: 30px;
	height: 30px;
	padding: 5px 5px 5px 10px;
`;

const InputGroup = styled.div`
	display: flex;
	flex-direction: row;
	width: 100%;
`;

const Input = styled.input`
	padding: 0.5em;
	color: black;
	border: 1px solid black;
	border-radius: 3px;
	min-width: 100px;
	max-width: 250px;
	&:hover {
		cursor: pointer;
	}
`;

const Span = styled.span`
	margin: 0.5em;
`;

const Div = styled.div`
	width: 17.5%;
	padding: 20px;
	border: 1px solid black;
	display: flex;
	flex-direction: column;
`;



const mapStateToProps = (state) => ({
	books: selectAllBooks(state)
});

const mapDispatchToProps = dispatch => ({
	requestSelectedBooks: (data) => dispatch(requestSelectedBooks(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
