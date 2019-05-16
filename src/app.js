import React, { Component } from 'react'
import Table from './table/table'
import Toggle from './switch/switch'
import Ifele from './ifele/ifele'
import LoginControl from './control/control'
import Form from './from/form'
import Select from './select/select'

class App extends Component {
    state = {
        characters: [
          {
            name: 'Charlie',
            // the rest of the data
          },
        ],
    }
    // 设置默认的props
    // getDefaultProps(){
    //     console.log(this, '设置默认的props', 'getDefaultProps')
    // }

    getInitialState(){
        //es6 class语法无此钩子函数
        console.log(this.props, '设置默认的props', 'getInitialState')
    }

    componentWillMount(){
        console.log(this.state.characters[0].name, '组件初始化时调用，一次，更新不调用', 'componentWillMount');
    }

    componentDidMount(){
        console.log(this, '组件渲染之后', 'componentDidMount')
    }

    componentWillReceiveProps(nextProps){
        console.log(this, nextProps, '组件接受新的props时调用', 'componentWillReceiveProps')
    }

    /*
    *  react性能优化非常重要的一环。组件接受新的state或者props时调用，我们可以设置在
    *  此对比前后两个props和state是否相同，如果相同则返回false阻止更新
    */ 
    shouldComponentUpdate(nextProps, nextState){

    }

    componentWillUpdate(nextProps, nextState){
        console.log('组件将要更新时调用，可修改state')
    }

    componentDidUpdate(){
        console.log('初始化不调用，组件更新完成后调用')
    }

    componentWillUnmount(){
        console.log('组件将要卸载时调用')
    }

    render() {
        const characters = [
            {
            name: 'Charlie',
            job: 'Janitor',
            },
            {
            name: 'Mac',
            job: 'Bouncer',
            },
            {
            name: 'Dee',
            job: 'Aspring actress',
            },
            {
            name: 'Dennis',
            job: 'Bartender',
            },
        ]

        const user = {
            firstName: 'Harper',
            lastName: 'Perez'
        };

        const numbers = [1, 2, 3, 4, 5];
        const listItems = numbers.map((number) =>
            <li key={number.toString()}>{number * number}</li>
        );

        function setName(user){
            if(user){
                return user.firstName + user.lastName;
            }
            return new Date().toLocaleTimeString();
            // return false ? 'isTrue': 'isFalse';
        }

        return (
            <div className="container">
                <Select />
                <hr/>
                
                <Form />
                <hr />

                <ul>{listItems}</ul>
                <hr />
                
                <LoginControl />
                <hr />

                <Ifele />
                <hr />

                <Toggle />
                <hr />

                <h1 tabIndex="0">
                  {user.length > 0 && 'aaa'}  {true ? 'isTrue': 'isFalse'} Hello, {setName(user)}!
                </h1>
                <hr />

                <Table characterData={characters} />
            </div>
        )
    }
}

export default App