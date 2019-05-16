import React from 'react'

class Select extends React.Component{
    constructor(props){
        super(props);
        this.state = {value: 'coconut'};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(e){
        this.setState({value: e.target.value});
    }

    handleSubmit(e){
        console.log(this.state.value, 'this.state.value —— e.target.value')
        e.preventDefault();
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                选择你喜欢的风味:
                <select value={this.state.value} onChange={this.handleChange}>
                    <option value="grapefruit">葡萄柚</option>
                    <option value="lime">柠檬</option>
                    <option value="coconut">椰子</option>
                    <option value="mango">芒果</option>
                </select>
                </label>
                <input type="submit" value="提交" />
            </form>
        );
    }
}

export default Select
