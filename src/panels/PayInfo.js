import React from 'react';
import PropTypes, { object, element, number } from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import Header from '@vkontakte/vkui/dist/components/Header/Header';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';
import PanelHeaderSimple from '@vkontakte/vkui/dist/components/PanelHeaderSimple/PanelHeaderSimple';
import Input from '@vkontakte/vkui/dist/components/Input/Input';
import PanelHeaderClose  from '@vkontakte/vkui/dist/components/PanelHeaderClose/PanelHeaderClose';
import { List, Alert, CellButton } from '@vkontakte/vkui';
import Slider from '@vkontakte/vkui/dist/components/Slider/Slider';
import Select from '@vkontakte/vkui/dist/components/Select/Select';
import View from '@vkontakte/vkui/dist/components/View/View';
import Root from '@vkontakte/vkui/dist/components/Root/Root';
import VPPanel from './VpPanel';
import Link from '@vkontakte/vkui/dist/components/Link/Link';
import Card from '@vkontakte/vkui/dist/components/Card/Card';

class PayInfo extends React.Component {

    constructor (props) {
      super(props);

      this.state = {
      };
    }

    options () {
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
            <Link target="_blank" href = 'https://qiwi.com/n/MISHKANYA'>Qivi(клик): </Link>
          </Header>
        </Card>
        <Card mode="outline">
          <Header aside={"4100 1405 7863 502"}>
            <Link >ЯндексДеньги:</Link>
          </Header>
        </Card>
        <Card mode="outline">
          <Header aside={"372864591"}>
            <Link target="_blank" href = 'https://vk.com/vkpay#action=transfer-to-user&user_id=372864591'>VKPay(клик): </Link>
          </Header>
        </Card>
	    </Div>
      );
    }
  }

  export default PayInfo