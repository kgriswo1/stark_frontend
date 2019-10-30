import React from 'react';
import Stock from '../components/stock'

class Home extends React.Component {

  render() {
    let stocksArray = this.props.stocks.map(stock => <Stock key={stock.id} stock={stock} />)
    return (
      <div>
          <h1>Home</h1>
          {stocksArray}
      </div>
    )
  }

}

export default Home