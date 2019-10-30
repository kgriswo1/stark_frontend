import React from 'react'
import MainContainer from './MainContainer'

class Fetch extends React.Component {

    fetchFB = () => {
        // fetch("https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=FB&apikey=I6V3R1JT2X3OK2EP")
        // .then(response => response.json())
        // .then(data => this.setState({
        //   stocks: [...this.state.stocks, data["Global Quote"]]
        // }))
        console.log("hello")
    }

    render() {
        return(
            <div>
                {/* <MainContainer fetchFB={this.fetchFB} /> */}
            </div>
        )
    }
}

export default Fetch