import React, { Component } from 'react';

class AddTask extends Component {
    render() {
        return (
            <div className="panel-block">
                <div className="field has-addons" style={{width: '100%'}} >
                    <p className="control is-expanded">
                        <input className="input" type="text" placeholder="I wonder..." />
                    </p>
                    <p className="control">
                        <a className="button is-primary">Add</a>
                    </p>
                </div>
            </div>
        );
    }
}

export default AddTask;
