import React from 'react';
import { Link, Div, Group, Button } from '@vkontakte/vkui';

//#region icons
import Icon28WalletOutline from '@vkontakte/icons/dist/28/wallet_outline';
import Icon28MessageAddBadgeOutline from '@vkontakte/icons/dist/28/message_add_badge_outline';
import Icon28GiftOutline from '@vkontakte/icons/dist/28/gift_outline';
import Icon28MoreHorizontal from '@vkontakte/icons/dist/28/more_horizontal';
//#endregion

class HelpPanel extends React.Component {

  constructor(props) {
    super(props);

    this.state =
    {
      adsHelp: false,
      vpHelp: false,
      stickersHelp: false,
      other: false,
    };
  }

  options() {
    let options = [];
    for (let i = 0; i <= 10; i += 2) {
      options.push(<option value={`${i / 10}`} key={`${i}`}>{i / 10}</option>)
    }
    return options;
  }
  HideHelp() {
    this.setState(() => {
      return { adsHelp: false }
    });
    this.setState(() => {
      return { vpHelp: false }
    });
    this.setState(() => {
      return { stickersHelp: false }
    });
    this.setState(() => {
      return { other: false }
    });
  }

  render() {
    return (
      <Div >
        <Group header={<Button before={<Icon28WalletOutline width={20} height={20} />} mode="tertiary" onClick={() => (this.HideHelp(), this.setState(() => {
          return { adsHelp: !this.state.adsHelp }
        }))}>
          Покупка рекламы
              </Button>}>
          {this.state.adsHelp ?
            <ol>
              <li>Перейдите во вкладку с рекламой</li>
              <li>Настройте тариф</li>
              <li>Нажмите кнопку</li>
              <li>Приложение скопировало текст с вашим тарифом, его необходимо просто вставить в поле ввода сообщения</li>
            </ol>
            : null}
        </Group>


        <Group header={<Button before={<Icon28MessageAddBadgeOutline width={20} height={20} />} mode="tertiary" onClick={() => (this.HideHelp(), this.setState(() => {
          return { vpHelp: !this.state.vpHelp }
        }))}>Сотрудничество</Button>}>
          {this.state.vpHelp ?
            <ol>
              <li>Перейдите во вкладку с сотрудничеством</li>
              <li>Сравните нашу статистику со статистикой вашей группы</li>
              <li>Выберите схему вп и заполните данные</li>
              <li>Нажмите кнопку</li>
              <li>Приложение скопировало текст с вашими данными, его необходимо просто вставить в поле ввода сообщения</li>
            </ol>
            : null}
        </Group>


        <Group header={<Button before={<Icon28GiftOutline width={20} height={20} />} mode="tertiary" onClick={() => (this.HideHelp(), this.setState(() => {
          return { stickersHelp: !this.state.stickersHelp }
        }))}>Стикеры</Button>}>
          {this.state.stickersHelp ?
            <ol>
              <li>Перейдите во вкладку с выдачей стикеров</li>
              <li>Подпишитесь на группу</li>
              <li>Дайте приложению доступ к вашим документам</li>
              <li>При необходимости введите каптчу</li>
              <li>Наслаждайтесь милыми стикерами с некотян =(^.^)=</li>
            </ol>
            : null}
        </Group>


        <Group header={<Button before={<Icon28MoreHorizontal width={20} height={20} />} mode="tertiary" onClick={() => (this.HideHelp(), this.setState(() => {
          return { other: !this.state.other }
        }))}>Другое</Button>}>
          {this.state.other ?
            <Div>
              <Div>По всем вопросам и предложениям писать {<Link target="_blank" href="https://vk.com/mishkanya">@mishkanya</Link>} или в {<Link target="_blank" href="https://vk.com/club143313662">группу</Link>} </Div>
              <Div>Обсуждаем новые идеи и развитие группы в  {<Link target="_blank" href="https://vk.me/join/AJQ1d2PdURbMRBCh9XsRfjer">беседе</Link>}</Div>
            </Div>
            : null}
        </Group>
      </Div>
    );
  }
}

export default HelpPanel