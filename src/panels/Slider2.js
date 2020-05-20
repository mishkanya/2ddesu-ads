import React from 'react';
import { Div, Cell, Input, List, Slider } from '@vkontakte/vkui';

class Slider2 extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      value2: 2,
    };
  }

  options() {
    let options = [];
    for (let i = 0; i <= 10; i += 2) {
      options.push(<option value={`${i / 10}`} key={`${i}`}>{i / 10}</option>)
    }
    return options;
  }

  render() {
    return (
      <Div>
        <Cell before={'Часов в закрепе: '} >
          <Input
            disabled
            id='input2'
            min={1}
            max={4} value={Number(this.state.value2)} onChange={e => (this.props.setPrice(), this.setState({ value2: e.target.value }))} type="number" />
        </Cell>
        <Slider
          align="right"
          step={1}
          min={1}
          max={4}
          value={Number(this.state.value2)}
          onChange={value2 => (this.props.setPrice(), this.setState({ value2 }))} />
      </Div>
    );
  }
}

export default Slider2