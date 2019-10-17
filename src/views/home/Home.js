import React from 'react';
import logo from 'images/logo.svg'

class Home extends React.Component {
  render() {
    return (
      <div>
         <h1>首页</h1>
         <p>{process.env.REACT_APP_EXAMPLE}</p>
         <img src={logo} alt=""/>
      </div>
     
    )
  }
}

export default Home