import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { requestSelectedBooks } from '../../actions/book_actions';
import { selectAllBooks } from '../../selectors/selectors';


class SearchBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			Title: ''
		};
		this.search = 'Title';
		this.inputChange = this.inputChange.bind(this);
		this.selectChange = this.selectChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit() {
		const queryObject = {[this.search]: this.state[this.search]};
		this.props.requestSelectedBooks(queryObject);
		console.log("handleSubmit state => " , this.state);
		console.log("queryObject => " , queryObject);
	}

	inputChange(e) {
		this.setState({ [this.search]: e.target.value });
	}

	selectChange(e) {
		this.search = e.target.value;
		this.setState({ [this.search]: ''})
		console.log(this.search);
	}

	render() {
		console.log("render State => ", this.state);
		return (
			<Div>
				<Span>Search</Span>
				<InputGroup>
					<Input
						placeholder={`Search By ${this.search}`}
						value={this.state[this.search]}
						onChange={this.inputChange}
						/>
					<Magnify
						onClick={this.handleSubmit}
					/>
				</InputGroup>
				<Select onChange={this.selectChange} >
					<Option>Title</Option>
					<Option>Author</Option>
					<Option>Genre</Option>
					<Option>Year</Option>
				</Select>
			</Div>
		);
	}
}

const Select = styled.select`
	height: 34px;
	border: 1px solid #AAA;
	border-radius: 2px;
	box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);
	color: #555;
	font-size: 16px;
	margin: 10px 0;
	min-width: 100px;
	max-width: 185px;
`;

const Option = styled.option`

`;

const Magnify = styled.img.attrs({
	src: "http://localhost:3000/public/images/search.png"
})`
	width: 30px;
	height: 30px;
	padding: 5px 5px 5px 10px;
	&:hover {
		cursor: pointer;
	}
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
	height: 200px;
	position: sticky;
	top: 5px;
`;


const mapStateToProps = (state) => ({
	books: selectAllBooks(state)
});

const mapDispatchToProps = dispatch => ({
	requestSelectedBooks: (data) => dispatch(requestSelectedBooks(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
