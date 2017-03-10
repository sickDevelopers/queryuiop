import React from 'react';
import AWS from 'aws-sdk';


export default class QueryBuilder extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			query: 
`{
	"TableName": "TableName"
}`
		};
	}

	updateCode(newCode) {
		this.setState({
			query: newCode
		})
		this.props.onQueryChange(this.state.query);
	}

	render() {

		const options = {
			lineNumbers: true
		}

		return (
			<textarea></textarea>	
		)
	}

}