import React, { Component } from 'react'

class Form extends Component {
    constructor(props){
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e){
        this.setState({value: e.target.value.toUpperCase()});
        console.log(this.state.value, e.target, 'handlechange')
    }

    handleSubmit(e){
        alert('提交的名字: ' + this.state.value);
        e.preventDefault();
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label>名字:<input type="text" value={this.state.value} onChange={this.handleChange} /></label>
                <input type="submit" value="提交" />
            </form>
        );
    }
}

export default Form;