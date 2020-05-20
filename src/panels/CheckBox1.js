import React from 'react';
import { Div, Cell, Checkbox } from '@vkontakte/vkui';

import Slider2 from './Slider2';

class Checkbox1 extends React.Component {

  constructor(props) {
    super(props);

    this.state =
    {
      showSlider: false
    };
  }

  options() {
    let options = [];
    for (let i = 0; i <= 10; i += 2) {
      options.push(<option value={`${i / 10}`} key={`${i}`}>{i / 10}</option>)
    }
    return options;
  }
  setPrice = () => {
    this.props.setPrice();
  };
  toggleHover() {
    setTimeout(function () {
      this.setPrice();
    }.bind(this), 200);
  }

  render() {
    return (
      <Div>
        <Cell before={'Зaкрепить запись?'}>
          <Checkbox
            id='checkbox1'
            value={Boolean(this.state.showSlider)}
            onChange={() => (this.setState({ showSlider: !this.state.showSlider }), this.toggleHover())} />
        </Cell>
        {this.state.showSlider ? <Slider2 setPrice={this.setPrice} /> : null}
      </Div>
    );
  }
}

export default Checkbox1