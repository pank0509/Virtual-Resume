import React from 'react';
import UnMountComponent from './UnMountComponent';

class Dialog extends React.Component {
    constructor(props) {
        super(props);
    }
    componentWillReceiveProps = (nextProps) => {
        console.log('this is componentWillReceiveProps', nextProps);
        return true
    };

    render() {
        return (
            <div>
                <div>{this.props.button ? 'Delete' : 'Save' }</div>
                {this.props.button  &&
                    <UnMountComponent />
                }
            </div>
        )
    }
}

export default Dialog;