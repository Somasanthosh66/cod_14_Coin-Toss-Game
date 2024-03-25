// Write your code here
import {Component} from 'react'

import './index.css'

const headImageUrl = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
const tailImageUrl = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {
    tossResultImage: headImageUrl,
    headsCount: 0,
    tailsCount: 0,
  }

  onTossCoin = () => {
    const {headsCount, tailsCount} = this.state
    const tossResult = Math.floor(Math.random() * 2)
    let tossImage = ''
    let latestHeadCount = headsCount
    let latestTailCount = tailsCount

    if (tossResult === 0) {
      tossImage = headImageUrl
      latestHeadCount += 1
    } else {
      tossImage = tailImageUrl
      latestTailCount += 1
    }
    this.setState({
      tossResultImage: tossImage,
      headsCount: latestHeadCount,
      tailsCount: latestTailCount,
    })
  }

  render() {
    const {tossResultImage, headsCount, tailsCount} = this.state
    const totalCount = headsCount + tailsCount

    return (
      <div className="bg-container">
        <div className="sub-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="des">Heads (or) Tails</p>
          <img
            src={tossResultImage}
            alt="toss result"
            className="toss-result-image"
          />
          <button type="button" onClick={this.onTossCoin} className="button">
            Toss Coin
          </button>
          <div className="count-container">
            <p className="count">Total: {totalCount}</p>
            <p className="count">Heads: {headsCount}</p>
            <p className="count">Tails: {tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
