import React from 'react';
import {Div, Group, Button, Panel, PanelHeader, Card, View, Root, Header, PanelHeaderBack,FixedLayout,PromoBanner } from '@vkontakte/vkui';
import bridge from '@vkontakte/vk-bridge';

//#region panels
import AdsPanel from './AdsPanel';
import VPPanel from './VpPanel';
import PayInfo from './PayInfo';
import Stickers from './Stickers';
import Help from './Help';
import VacancyList from './VacancyList';
import Personal from './Personal';
import RandomAnime from './RandomAnime';

//#endregion

//#region icons
import Icon24Like from '@vkontakte/icons/dist/24/like';///сердечко
import Icon24Market from '@vkontakte/icons/dist/24/market';///реклама
import Icon24Work from '@vkontakte/icons/dist/24/work';///вп
import Icon24Gift from '@vkontakte/icons/dist/24/gift';///стикеры
import Icon24Note from '@vkontakte/icons/dist/24/note';///реквизиты
import Icon24Info from '@vkontakte/icons/dist/24/info';///помощь
import Icon24Users from '@vkontakte/icons/dist/24/users';//персонал
import Icon24UserAdd from '@vkontakte/icons/dist/24/user_add';//вакансии
import Icon24Services from '@vkontakte/icons/dist/24/services';//случайное аниме
//#endregion

const promoBannerProps = {
  title: 'Заголовок',
  domain: 'vk.com',
  trackingLink: 'https://vk.com',
  ctaText: 'Перейти',
  advertisingLabel: 'Реклама',
  iconLink: 'https://sun9-7.userapi.com/c846420/v846420985/1526c3/ISX7VF8NjZk.jpg',
  description: 'Описание рекламы',
  ageRestriction: 14,
  statistics: [
    { url: '', type: 'playbackStarted' },
    { url: '', type: 'click' }
  ]
};

let Checed = true;
class MainScene extends React.Component {
  constructor(props) 
  {
    super(props);

    this.state = {
      getUserInfo: false,
      userInfo: "",
      activeView: 'mainMenu',
      Debug: null,
    }
  }
  options() {
    let options = [];
    for (let i = 0; i <= 10; i += 2) {
      options.push(<option value={`${i / 10}`} key={`${i}`}>{i / 10}</option>)
    }
    return options;
  }

  getUserName()
  {
    try
    {
      if(this.state.userInfo.first_name != null)
        return this.state.userInfo.first_name;
      else
          return "милый подписчик";
    }
    catch
    {
      return "милый подписчик";
    }
  }

  changeUserInfo()
  {
    setTimeout(function ()
    {
      bridge.send("VKWebAppGetUserInfo", {})
      .then(user_data => {
        this.setState({ userInfo: user_data });
        this.setState({ getUserInfo: true });
      });
      //bridge.subscribe(e => (this.changeAppTheme(e)));
      
    }
    .bind(this), 200);
    Checed = false;
  }
  changeAppTheme(data)
  {
    if(data.detail.type == "VKWebAppUpdateConfig")
    {
      try
      {
        console.log(data);
        if(data.detail.data.scheme != null)
          this.setState({Debug: data.detail.data.scheme});
        else
        this.setState({Debug: "Buuuuuugs"});
      }
      catch
      {
        this.setState({Debug: "Hi pc user"});
      }
      
    }
    Checed = false;
  }
  componentWillMount(){
    this.changeUserInfo();
  }

  render()
  {
    if(Checed == true)
    {
      this.changeUserInfo();
    }
    return (
      <Root activeView={this.state.activeView}>
        
        
        <View header activePanel="mainMenu" id="mainMenu">
          <Panel id="mainMenu">
            <PanelHeader >
              <Button after={<Icon24Like width={20} height={20} />} size="xl" mode="tertiary" target="_blank" href='https://vk.com/club143313662'>2DDesu App</Button>
            </PanelHeader>

            <Group align="center">
              <Div>
                <img style={{ borderRadius: "100%" }} src={this.state.userInfo.photo_200} width={120} height={120} />
              </Div>
              <Div>
                Привет, {this.getUserName()}! Мы ждали тебя:3
              </Div>
            </Group>


            <Group header={<Header mode="secondary">Сотрудничество</Header>}>
              <Div align="center">
                <Button before={<Icon24Market width={20} height={20} />} onClick={() => this.setState({ activeView: 'Ads' })} mode="tertiary " size="l" style={{ marginRight: 8 }}>Заказать рекламу</Button>
                <Button before={<Icon24Work width={20} height={20} />} onClick={() => this.setState({ activeView: 'Vp' })} mode="tertiary" size="l" >Взаимопиар</Button>
              </Div>
              <Div align="center">
                <Button before={<Icon24Users width={20} height={20} />} onClick={() => this.setState({ activeView: 'Personal' })} mode="tertiary " size="l" style={{ marginRight: 8 }}>Персонал</Button>
                <Button before={<Icon24UserAdd width={20} height={20} />} onClick={() => this.setState({ activeView: 'VacancyList' })} mode="tertiary" size="l" >Вакансии</Button>
              </Div>
            </Group>


            <Group align="center" header={<Header mode="secondary">Приятные плюшки</Header>}>
              <Div><Button before={<Icon24Gift width={20} height={20} />} mode="commerce" size="l" onClick={() => this.setState({ activeView: 'stickers' })}>Стикеры группы</Button></Div>
              <Div><Button before={<Icon24Services width={20} height={20} />} mode="destructive" size="l" onClick={() => this.setState({ activeView: 'randomAnime' })}>Случайное аниме</Button></Div>
            </Group >

            <Group align="center" header={<Header mode="secondary">Информация</Header>}>
              <Div><Button before={<Icon24Note width={20} height={20} />} size="l" onClick={() => this.setState({ activeView: 'Pay' })}>Реквизиты</Button></Div>
              <Button before={<Icon24Info width={20} height={20} />} onClick={() => this.setState({ activeView: 'help' })} mode="tertiary" size="l" >Помощь</Button>
            </Group>
              <Div>{this.state.Debug}</Div>
          </Panel>
        </View>


        <View activePanel="Ads" id="Ads">
          <Panel id="Ads">
            <PanelHeader left={<PanelHeaderBack onClick={() => this.setState({ activeView: 'mainMenu' })} />}>
              <Button after={<Icon24Market width={20} height={20} />} size="xl" mode="tertiary" target="_blank" href='https://vk.com/club143313662'>Реклама</Button>
            </PanelHeader>
            <AdsPanel />
          </Panel>
        </View>


        <View header activePanel="Vp" id="Vp">
          <Panel id="Vp">
            <PanelHeader left={<PanelHeaderBack onClick={() => this.setState({ activeView: 'mainMenu' })} />}>
              <Button after={<Icon24Work width={20} height={20} />} size="xl" mode="tertiary" target="_blank" href='https://vk.com/club143313662' >Взаимопиар</Button>
            </PanelHeader>
            <VPPanel />
          </Panel>
        </View>

       
        <View header activePanel="Personal" id="Personal">
          <Panel id="Personal">
            <PanelHeader left={<PanelHeaderBack onClick={() => this.setState({ activeView: 'mainMenu' })} />}>
              <Button after={<Icon24Users width={20} height={20} />} size="xl" mode="tertiary" target="_blank" href='https://vk.com/club143313662'>Персонал группы</Button>
            </PanelHeader>
            <Personal />
          </Panel>
        </View>


        <View header activePanel="VacancyList" id="VacancyList">
          <Panel id="VacancyList">
            <PanelHeader left={<PanelHeaderBack onClick={() => this.setState({ activeView: 'mainMenu' })} />}>
              <Button after={<Icon24UserAdd width={20} height={20} />} size="xl" mode="tertiary" target="_blank" href='https://vk.com/club143313662'>Вакансии</Button>
            </PanelHeader>
            <VacancyList />
          </Panel>
        </View>
        

        <View header activePanel="stickers" id="stickers">
          <Panel id="stickers">
            <PanelHeader left={<PanelHeaderBack onClick={() => this.setState({ activeView: 'mainMenu' })} />}>
              <Button after={<Icon24Gift width={20} height={20} />} mode="tertiary" size="xl" target="_blank" href='https://vk.com/club143313662'>Стикеры группы</Button>
            </PanelHeader>
            <Stickers />
          </Panel>
        </View>

        
        <View header activePanel="randomAnime" id="randomAnime">
          <Panel id="randomAnime">
            <PanelHeader left={<PanelHeaderBack onClick={() => this.setState({ activeView: 'mainMenu' })} />}>
              <Button after={<Icon24Services width={20} height={20} />} size="xl" mode="tertiary" target="_blank" href='https://vk.com/club143313662'>Случайное аниме</Button>
            </PanelHeader>
            <RandomAnime />
            {/*<FixedLayout vertical="bottom">
                    <PromoBanner bannerData={promoBannerProps} />
            </FixedLayout>;*/}
          </Panel>
        </View>
      

        <View header activePanel="Pay" id="Pay">
          <Panel id="Pay">
            <PanelHeader left={<PanelHeaderBack onClick={() => this.setState({ activeView: 'mainMenu' })} />}>
              <Button after={<Icon24Note width={20} height={20} />} size="xl" mode="tertiary" target="_blank" href='https://vk.com/club143313662'>Реквизиты</Button>
            </PanelHeader>
            <PayInfo />
          </Panel>
        </View>


        <View header activePanel="help" id="help">
          <Panel id="help">
            <PanelHeader left={<PanelHeaderBack onClick={() => this.setState({ activeView: 'mainMenu' })} />}>
              <Button after={<Icon24Info width={20} height={20} />} size="xl" mode="tertiary" target="_blank" href='https://vk.com/club143313662'>Помощь</Button>
            </PanelHeader>
            <Help />
          </Panel>
        </View>

      </Root>
    )
  }
}

export default MainScene