import React from 'react';
import Checkbox from 'material-ui/Checkbox';

class GetSubHeading extends React.Component {
    render(){
        return(
            <div>
                {this.props.data.map( data => (
                    <div style={{ paddingLeft: '2rem' }}>
                        <Checkbox
                            checked={this.props.check}
                            onChange={this.props.handleClicked}
                        />
                        {data}
                    </div>
                ))
                }
            </div>
        );
    }
}
export default GetSubHeading;
