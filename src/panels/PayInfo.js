import React from 'react';
import {Div, Header, Link, Card} from '@vkontakte/vkui';

class PayInfo extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
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
      <Div >
        <Card mode="outline">
          <Header aside={"mishkanya"}>
            <Link target="_blank" href='https://qiwi.com/n/MISHKANYA'>Qivi(клик): </Link>
          </Header>
        </Card>
        <Card mode="outline">
          <Header aside={"4100 1405 7863 502"}>
            <Link >ЯндексДеньги:</Link>
          </Header>
        </Card>
        <Card mode="outline">
          <Header aside={"372864591"}>
            <Link target="_blank" href='https://vk.com/vkpay#action=transfer-to-user&user_id=372864591'>VKPay(клик): </Link>
          </Header>
        </Card>
      </Div>
    );
  }
}

export default PayInfo