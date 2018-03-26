import React from 'react';
import { hot } from 'react-hot-loader';
import Dialog from './Dialog';


/* Use react-intl as a React component */
const array = [];
class App extends React.Component {
    constructor (props){
        super(props);
        this.state = {
            button: false,
        }
    }
    componentWillMount = () => {
        console.log('this is the compoentWillMount');
    };
    componentDidMount = () => {
        console.log('this is componentDidMount');
    };
    shouldComponentUpdate = (nextProps, nextState) => {
        console.log('this is shouldComponentUpdate', nextProps, nextState);
        return true;
    };
    componentWillUpdate = () => {
        console.log('this is componentWillUpdate');
    };
    componentDidUpdate = () => {
        console.log('this is componentDidUpdate');
    };
    componentWillUnmount = () => {
        console.log('this is componentWillUnmount');
    };
    handleclick = () => {
        console.log('this is Button Clicked');
        this.setState({
            button: !this.state.button,
        })
    };

    render() {
        console.log('render');
        return (
            <h1>
                <button className="btn btn-primary" onClick={this.handleclick}>{this.state.button ? 'Save' : 'Delete' }</button>
                <Dialog
                    button={this.state.button}
                />
            </h1>
        );
    }
}

export default hot(module)(App);
