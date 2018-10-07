import React from 'react';
import Trail from './Trail'

class Info extends React.Component {

    render() {   

        return (
            <div id="content">
                    <h3>Trail Results</h3>
                    <ol>
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