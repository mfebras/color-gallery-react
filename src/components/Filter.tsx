import React from 'react';

class Filter extends React.Component {
    render() {
        return (
            <div className="filter flex-row">
                <label>
                    <input type="checkbox" value="red" />
                    Red {">"} 50%
                </label>
                <label>
                    <input type="checkbox" value="green" />
                    Green {">"} 50%
                </label>
                <label>
                    <input type="checkbox" value="blue" />
                    Blue {">"} 50%
                </label>
                <label>
                    <input type="checkbox" value="saturation" />
                    Saturation {">"} 50%
                </label>
            </div>
        );
    }
}

export default Filter;
