import React from 'react';
import Trail from './Trail';


class Info extends React.Component {
    
    render() {   
        const { onChangeMaxLength,
        } = this.props 

        return (
            <div id="content">
                    <h3>Hiking Trails</h3>
                    <p>Showing {this.props.trails.length} results for trails near Carrboro, NC.</p>
                    <select value="20" onChange={(value) => {onChangeMaxLength(value)}}>
                        <option value="20">All Results</option>
                        <option value="3">Max 3 miles</option>
                        <option value="5">Max 5 miles</option>
                        <option value="7">Max 7 miles</option>
                    </select>
                    <ol id="trail-list-dynamic">
                    {this.props.trails.map((trail) => (                               
                        <li key={trail.id}>
                            <Trail
                            trail={trail}
                            online={this.props.isOnline}
                            maxLength={this.props.maxLength}
                            />
                        </li>
                         ))} 
                    </ol>
            </div>
        )

    }
}

export default Info