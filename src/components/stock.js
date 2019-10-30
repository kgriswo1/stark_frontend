import React from 'react';

class Stock extends React.Component {

  render() {
    return (
      <div>
          <h1>{this.props.stock.ticker}</h1>
      </div>
    )
  }

}

export default Stock