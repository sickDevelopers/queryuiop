import React from 'react';
// import '../styles/index.scss';
import SplitPane from 'react-split-pane';
import QueryBuilder from './QueryBuilder.jsx';
import QueryResult from './QueryResult.jsx';
import Header from './Header.jsx';


// require('../styles/bootstrap-4.0.0-alpha.6-dist/css/bootstrap.min.css')
import '../../node_modules/material-design-lite/material.min.css';
import '../styles/app.global.css';

export default class App extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            result: [],
            query: ''
        }
    }

    execCommand() {


        const client = new AWS.DynamoDB.DocumentClient();

        var self = this;

        client.scan(JSON.parse(this.state.query), function (err, result) {

            if (err) {
                console.log(err);
            }

            self.setState({
                result: result.Items
            })

        })

    }

    onQueryChange(query) {

        this.setState({
            query: query
        })

    }


    render() {
        return (

            <div>

                <div className="mdl-layout mdl-js-layout mdl-layout--fixed-header">
                    <Header />
                </div>

                <div>
                    <SplitPane split="vertical" maxSize={500} defaultSize={500}>
                        <div>
                            <QueryBuilder onQueryChange={this.onQueryChange.bind(this)}/>
                            <div className="buttons-container">
                                <button onClick={this.execCommand.bind(this)}>SCAN</button>
                            </div>
                        </div>
                        <div>
                            <QueryResult result={this.state.result}/>
                        </div>

                    </SplitPane>
                </div>


            </div>



        )
    }
}
