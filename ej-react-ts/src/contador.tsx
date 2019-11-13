import * as React from 'react';

class Contador extends React.Component<{}, {cuenta: number}> {
  constructor(props) {
    super(props);
    this.state = {
      cuenta: 0
    }
    this.changeCuenta = this.changeCuenta.bind(this);
  }

  changeCuenta() {
    this.setState({
      cuenta: this.state.cuenta + 1
    })
  }

  render() {
    return (
      <div>
        <span>Cuenta: {this.state.cuenta}</span>
        <button type="button" onClick={this.changeCuenta}>+</button>
      </div>
    )
  }
}

export { Contador };