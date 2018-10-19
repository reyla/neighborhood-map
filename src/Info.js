import React from 'react';
import Trail from './Trail';


class Info extends React.Component {

    render() {
        const { onChangeMaxLength,
        } = this.props

        return (
            <div id="content">
                <h2>Hiking Trails Map</h2>
                <p>This app displays hiking trails around Carrboro, NC. Hiking trail information is pulled from <a href="http://hikingproject.com" title="HikingProject.com">HikingProject.com</a>.</p>
                <p>Currently showing {this.props.trails.length} results.</p>
                <select value={this.props.maxLength ? this.props.maxLength : '20'} onChange={value => { onChangeMaxLength(value) }}>
                    <option value="selectMaxLength">Select max length...</option>
                    <option value="20">All Results</option>
                    <option value="3">Max 3 miles</option>
                    <option value="5">Max 5 miles</option>
                    <option value="7">Max 7 miles</option>
                </select>
                <ol id="trail-list-dynamic">
                    {this.props.trails.map(trail => (
                        <li key={trail.id}>
                            <Trail trail={trail} onClick={this.props.onListClick} />
                        </li>
                    ))}
                </ol>
            </div>
        )
    }
}

export default Info