import React from 'react';
import './App.css';
import { Route, withRouter} from 'react-router-dom'
import MainContainer from './containers/MainContainer'
import NavBar from './containers/NavBar';

class App extends React.Component {

  render() {
    return (
      <div>
        <NavBar />
        <Route path="/" component={MainContainer} /> 
      </div>
    )
  }

}

export default withRouter(App);
