import React from 'react';
import { Div, Cell, Input, List, Slider } from '@vkontakte/vkui';


class HourCalculater extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      value1: 6,
    };
  }


  s = () => this.state.value1;
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
        <List>
          <Cell before={'Часов в ленте: '}>
            <Input
              disabled
              id='input1'
              min={6}
              max={24} value={Number(this.state.value1)} onChange={e => (this.props.setPrice(this.state.value1), this.setState({ value1: e.target.value }))} type="number" />
          </Cell>
          <Cell>
            <Slider
              align="right"
              step={1}
              min={6}
              max={24}
              value={Number(this.state.value1)}
              onChange={value1 => (this.props.setPrice(), this.setState({ value1 }))}
            />
          </Cell>
        </List>
      </Div>
    );
  }
}


export default HourCalculater