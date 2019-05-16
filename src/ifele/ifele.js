import React, { Component } from 'react'

class Ifele extends Component {
    constructor(props) {
      super(props);
      this.state = {isOn: true};
    }
  
    render() {
        function UserGreeting(props) {
            return <span>props true</span>;
        }
          
        function GuestGreeting(props) {
            return <span>props false</span>;
        }
        function Greeting(props) {
            console.log(props, 'props')
            if (props.isLoggedIn) {
                return <UserGreeting />;
            }
            return <GuestGreeting />;
        }

      	return (
        	<Greeting isLoggedIn={2 >= 4 ? true : false} />
      	);
    }
}

export default Ifele;