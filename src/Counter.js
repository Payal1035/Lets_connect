import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }
    increment() {
        this.setState({
            count: this.state.count + 1
        },
            () => {
                console.log('Callback value', this.state.count)
            }
        )
        console.log(this.state.count)
    }

    render() {
        return (
            <div>
                <div>
                    Count - {this.state.count}
                </div>
                <button className='border-2 border-black' onClick={() => this.increment}>Increment</button>
            </div>
        )
    }
}

export default Counter


///////////////////////////////////////////////////
import React, { Component } from 'react'

class ClassCounter extends Component {
  constructor(props) {
    super(props)

    this.state = {
       count: 0
    }
  }

  incrementCount = () => {
    this.setState({
      count: this.state.count + 1
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.incrementCount}>Count {this.state.count}</button>
      </div>
    )
  }
}

export default ClassCounter

