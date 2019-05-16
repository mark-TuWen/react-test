import React, { Component } from 'react'
import './switch.css'

class Toggle extends Component {
    constructor(props) {
      super(props);
      this.state = {isToggleOn: true};
  
      // 为了在回调中使用 `this`，这个绑定是必不可少的
      this.handleClick = this.handleClick.bind(this);
	}
	
    /*
    *  react性能优化非常重要的一环。组件接受新的state或者props时调用，我们可以设置在
    *  此对比前后两个props和state是否相同，如果相同则返回false阻止更新
    */ 
   	shouldComponentUpdate(nextProps, nextState){
	   console.log(this.state, nextState, 'switch.js shouldComponentUpdate 是否该更新DOM')
	   return nextState;
   	}	
	   
  	componentWillUpdate(nextProps, nextState){
		console.log(this.state, nextState, 'switch.js componentWillUpdate 即将更新')
   	}

    componentDidUpdate(){
		console.log(this.state, 'componentDidUpdate 更新完毕')
    }	
  
    handleClick(e) {
		console.log(this, e.target,'this click')
      	this.setState(state => ({
        	isToggleOn: !state.isToggleOn
      	}));
    }
  
    render() {
      	return (
        	<button className="btn-normal" onClick={this.handleClick}>
          		{this.state.isToggleOn ? 'ON' : 'OFF'}
        	</button>
      	);
    }
}

export default Toggle;