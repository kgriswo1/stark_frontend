import React from 'react';
import { Route, Switch } from 'react-router-dom'
import Home from './Home'
import WatchList from './WatchList'
import Profile from './Profile'

class MainContainer extends React.Component {

  state = {
    stocks: []
  }

  componentDidMount() {
    this.fetchFB()
  }

  fetchFB = () => {
    fetch("http://localhost:4000/stocks")
    .then(response => response.json())
    .then(data => {
      console.log("the data:", data)
    })
    // .then(data => this.setState({
    //   stocks: [...this.state.stocks, data["Global Quote"]]
    // }))
}

  render() {
    console.log("in the main")
    return (
      <div>
        <h1>MainContainer</h1>
        <Switch>
            <Route path="/home" render={() => <Home stocks={this.state.stocks} />} />
            <Route path="/watchlist" component={WatchList} />
            <Route path="/profile" component={Profile} />
        </Switch>
      </div>
    )
  }

}

export default MainContainer;
