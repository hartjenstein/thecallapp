// @ts-check
import React from 'react';
import Option from './Option';

const Options = (props) => (
    <div>
        <div className="widget__header">
            <h3 className="widhetheader__title">Your Options</h3>
            <button className="button button--link" onClick={props.handleDeleteOptions}>Remove all</button>
        </div>

        {!props.options.length && <p className="widget__message">Please add an option</p>}
        {
            props.options.map( (option, index) => (
                <Option 
                    key={option} 
                    optionText={option}
                    count={index + 1}
                    handleDeleteOption={props.handleDeleteOption}
                /> 
            ))
        }
    </div>
)

export default Options;
