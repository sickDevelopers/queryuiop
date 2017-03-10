import React from 'react';
import Modal from 'react-modal';
import ConfigurationForm from './ConfigurationForm';


export default class Header extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
            modalIsOpen: false,
			loading: false
		};
	}

	showConfigModal() {
		this.setState({
			modalIsOpen: true
		});
		console.log('modal')
	}

	afterOpenModal() {
		console.log('afterOpenModal')
	}

    closeModal() {
        console.log('closeModal')
    }

    saveConfiguration(event) {
		event.preventDefault();
		console.log(event.target);
	}

	render() {

        const customStyles = {
            content : {
                top                   : '50%',
                left                  : '50%',
                right                 : 'auto',
                bottom                : 'auto',
                marginRight           : '-50%',
                transform             : 'translate(-50%, -50%)'
            }
        };

		return (
	        <div className="mdl-layout__header">
	        	<div className="mdl-layout__header-row">
	            	<span className="mdl-layout-title">DynamoDB Query</span>
	            	<div className="mdl-layout-spacer"></div>
	            	<nav className="mdl-navigation mdl-layout--large-screen-only">
	            		<button className="mdl-button mdl-js-button mdl-button--raised mdl-button--accent" onClick={this.showConfigModal.bind(this)}>Config</button>
	            	</nav>
	            </div>

				<Modal
					isOpen={this.state.modalIsOpen}
					onAfterOpen={this.afterOpenModal}
					onRequestClose={this.closeModal}
					style={customStyles}
					contentLabel="Example Modal"
				>
					<ConfigurationForm submitForm={this.saveConfiguration}></ConfigurationForm>

				</Modal>

	        </div>
	    )	
	}
    
}
