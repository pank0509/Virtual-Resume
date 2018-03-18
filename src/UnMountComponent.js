import React from 'react';

class UnMountComponent extends React.Component {
    constructor(props){
       super(props)
    }
    componentWillUnmount = () => {
        console.log('InUnmount');
    };
    render(){
        return(
            <div>
                <button className=" btn btn-danger">
                    UnMount
                </button>
            </div>
        )
    }
}
export default UnMountComponent;