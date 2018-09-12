import React from 'react';
import AddOption from './AddOption';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component {
    state = {
        options: [],
        selectedOption: undefined
    };

    handleDeleteOptions = () => {
        this.setState(() => ({ options: [] }));
    }

    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => (
            { options: prevState.options.filter( option => optionToRemove !== option )
        }));
    }

    handleOptionClearState = () => {
        setTimeout(() => {
            this.setState(() => ({selectedOption: undefined}));
        }, 200);
  
    }

    handlePick = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        this.setState(() => ({
            selectedOption: option
        }));
    }

    handleAddOption = (option) => {
        if (!option) {
            return 'Enter valid value';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'already exists';
        } 

        this.setState(prevState => ({ options: prevState.options.concat(option) }));
    }
    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
    
            if (options) {
                this.setState(() => ({ options })); //same as {options: options}
            }
        } catch (e) {

        }
       
    }

    componentDidUpdate(prevProps, prevState){
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
            console.log('saved')
        }
    }

    render() {
        const subtitle = 'Put your life into the hands of a computer';
       
        return (
            <div>
                <Header subtitle={subtitle} />
                <div className='container'>
                    <Action 
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick}    
                    /> 
                    <div className="widget">
                        <Options 
                            options={this.state.options} 
                            handleDeleteOptions={this.handleDeleteOptions}
                            handleDeleteOption={this.handleDeleteOption}
                        />
                        <AddOption handleAddOption={this.handleAddOption}/>
                    </div>
                </div>
             
                <OptionModal clearSelectedOption={this.handleOptionClearState} selectedOption={this.state.selectedOption}/>
            </div>
        );

    }
}