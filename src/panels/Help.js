import React from 'react';
import PropTypes, { object, element, number } from 'prop-types';
import Panel from '@vkontakte/vkui/dist/components/Panel/Panel';
import Header from '@vkontakte/vkui/dist/components/Header/Header';
import Button from '@vkontakte/vkui/dist/components/Button/Button';
import Group from '@vkontakte/vkui/dist/components/Group/Group';
import Cell from '@vkontakte/vkui/dist/components/Cell/Cell';
import Div from '@vkontakte/vkui/dist/components/Div/Div';
import Avatar from '@vkontakte/vkui/dist/components/Avatar/Avatar';
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

class Help extends React.Component {

    constructor (props) {
      super(props);

      this.state =
      {
        adsHelp : false,
        vpHelp : false,
        stickersHelp: false,
        other: false,
      };
    }

    options () 
    {
      let options = [];
      for (let i = 0; i <= 10; i += 2) {
        options.push(<option value={`${i / 10}`} key={`${i}`}>{i / 10}</option>)
      }
      return options;
    }
    HideHelp()
    {
      this.setState((state) => {
        return {adsHelp: false}
      });
      this.setState((state) => {
        return {vpHelp: false}
      });
      this.setState((state) => {
        return {stickersHelp: false}
      });
      this.setState((state) => {
        return {other: false}
      });
    }

    render() {
      return (
      <Div >
          <Group header={<Button mode="tertiary" onClick={()=> (this.HideHelp(), this.setState((state) => {
            return {adsHelp: !this.state.adsHelp}}))}>
                Покупка рекламы
              </Button>}>
            {this.state.adsHelp? 
            <ol>
              <li>Перейдите во вкладку с рекламой</li>
              <li>Настройте тариф</li>
              <li>Нажмите кнопку</li>
              <li>Приложение скопировало текст с вашим тарифом, его необходимо просто вставить в поле ввода сообщения</li>
            </ol>
            : null}
          </Group>


          <Group header={<Button mode="tertiary" onClick={()=> (this.HideHelp(), this.setState((state) => {
            return {vpHelp: !this.state.vpHelp}
          }))}>Сотрудничество</Button>}>
            {this.state.vpHelp? 
            <ol>
              <li>Перейдите во вкладку с сотрудничеством</li>
              <li>Сравните нашу статистику со статистикой вашей группы</li>
              <li>Выберите схему вп и заполните данные</li>
              <li>Нажмите кнопку</li>
              <li>Приложение скопировало текст с вашими данными, его необходимо просто вставить в поле ввода сообщения</li>
            </ol>
            : null}
          </Group>


          <Group header={<Button mode="tertiary" onClick={()=> (this.HideHelp(), this.setState((state) => {
            return {stickersHelp: !this.state.stickersHelp}
          }))}>Стикеры</Button>}>
            {this.state.stickersHelp? 
            <ol>
              <li>Перейдите во вкладку с выдачей стикеров</li>
              <li>Подпишитесь на группу</li>
              <li>Дайте приложению доступ к вашим документам</li>
              <li>При необходимости введите каптчу</li>
              <li>Наслаждайтесь милыми стикерами с некотян =(^.^)=</li>
            </ol>
            : null}
          </Group>


          <Group header={<Button mode="tertiary" onClick={()=> (this.HideHelp(), this.setState((state) => {
              return {other: !this.state.other}
            }))}>Другое</Button>}>
            {this.state.other? 
            <Div>
              <Div>По всем вопросам и предложениям писать {<Link href="https://vk.com/mishkanya">@mishkanya</Link>} или в {<Link href="https://vk.com/club143313662">группу</Link>} </Div>
              <Div>Обсуждаем новые идеи и развитие группы в  {<Link href="https://vk.me/join/AJQ1d2PdURbMRBCh9XsRfjer">беседе</Link>}</Div>
            </Div>
            : null}
          </Group>
      </Div>
      );
    }
  }

  export default Help