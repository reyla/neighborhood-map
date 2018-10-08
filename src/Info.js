import React from 'react';
import Trail from './Trail';


class Info extends React.Component {

    render() {   
        
        return (
            <div id="content">
                    <h3>Hiking Trails</h3>
                    <p>Showing {this.props.trails.length} results for trails near Carrboro, NC.</p>
                    <p>Filter options:</p>
                    <select value={this.props.maxLength}>
                        <option value="changeLength" disabled>Max Length</option>
                        <option value="max3miles">Max 3 miles</option>
                        <option value="max5miles">Max 5 miles</option>
                        <option value="max7miles">Max 7 miles</option>
                        <option value="allresults">All Results</option>
                    </select>
                    <ol id="trail-list-dynamic">
                    {this.props.trails.map((trail) => (                               
                        <li key={trail.id}>
                            <Trail
                            trail={trail}
                            />
                        </li>
                         ))} 
                    </ol>
            </div>
        )

    }
}

export default Info