import React from 'react';


export default class ConfigurationForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            awsAccessId: '',
            awsSecret: '',
            region: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
    }

    handleChange(event) {
        this.setState({
            awsAccessId: event.target.value
        });
    }

    render() {

        console.log(this.state.awsAccessId);

        return (
            <form onSubmit={this.props.submitForm}>
                <h2>TEST</h2>
                <input type="text" onChange={this.handleChange} value={this.state.awsAccessId} />
                <input type="submit" value="Save configuration" />
            </form>
        )
    }

}