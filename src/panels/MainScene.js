import React from 'react';
import {Div, Group, Button, Panel, PanelHeader, Card, View, Root, Header, PanelHeaderBack,FixedLayout,PromoBanner } from '@vkontakte/vkui';
import bridge from '@vkontakte/vk-bridge';
import '@vkontakte/vkui/dist/vkui.css';

//#region panels
import AdvertisementPanel from './AdvertisementPanel';
import InterplayPanel from './InterplayPanel';
import PayInfoPanel from './PayInfoPanel';
import StickersPanel from './StickersPanel';
import HelpPanel from './HelpPanel';
import VacansiesPanel from './VacansiesPanel';
import PersonalPanel from './PersonalPanel';
import RandomAnimePanel from './RandomAnimePanel';

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
      Debug: null,
      activeView: 'MainMenu',
      
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
    this.getUserToken()
  }
  getUserToken()
  {
    bridge.send("VKWebAppStorageGet", {"keys": ["UserToken"]}).then(e => (console.log(e.keys[0].value),this.setUserToken((e.keys[0].value)))).catch(e => (console.log(e)));
  }
  setUserToken(response)
  {
    if(response == false)
    {
      bridge.send("VKWebAppGetAuthToken", {"app_id": 7367088, "scope": "friends, status, docs "}).then(e => (bridge.send("VKWebAppStorageSet", {"key": "UserToken", "value": e.access_token})));
    }
  }

  render()
  {
    if(Checed == true)
    {
      this.changeUserInfo();
    }
    return (
      <Root activeView={this.state.activeView}>
        <View header activePanel="MainMenu" id="MainMenu">
          <Panel id="MainMenu">
            <PanelHeader separator={false}>
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
                <Button before={<Icon24Market width={20} height={20} />} onClick={() => this.setState({ activeView: 'Advertisement' })} mode="tertiary " size="l" style={{ marginRight: 8 }}>Заказать рекламу</Button>
                <Button before={<Icon24Work width={20} height={20} />} onClick={() => this.setState({ activeView: 'Interplay' })} mode="tertiary" size="l" >Взаимопиар</Button>
              </Div>
              <Div align="center">
                <Button before={<Icon24Users width={20} height={20} />} onClick={() => this.setState({ activeView: 'Personal' })} mode="tertiary " size="l" style={{ marginRight: 8 }}>Персонал</Button>
                <Button before={<Icon24UserAdd width={20} height={20} />} onClick={() => this.setState({ activeView: 'Vacansies' })} mode="tertiary" size="l" >Вакансии</Button>
              </Div>
            </Group>


            <Group align="center" header={<Header mode="secondary">Приятные плюшки</Header>}>
              <Div><Button before={<Icon24Gift width={20} height={20} />} mode="commerce" size="l" onClick={() => this.setState({ activeView: 'Stickers' })}>Стикеры группы</Button></Div>
              <Div><Button before={<Icon24Services width={20} height={20} />} mode="destructive" size="l" onClick={() => this.setState({ activeView: 'RandomAnime' })}>Случайное аниме</Button></Div>
            </Group >

            <Group align="center" header={<Header mode="secondary">Информация</Header>}>
              <Div><Button before={<Icon24Note width={20} height={20} />} size="l" onClick={() => this.setState({ activeView: 'PayInfoPanel' })}>Реквизиты</Button></Div>
              <Button before={<Icon24Info width={20} height={20} />} onClick={() => this.setState({ activeView: 'HelpPanel' })} mode="tertiary" size="l" >Помощь</Button>
            </Group>
              <Div>{this.state.Debug}</Div>
          </Panel>
        </View>


        <View activePanel="Advertisement" id="Advertisement">
          <Panel id="Advertisement">
            <PanelHeader left={<PanelHeaderBack onClick={() => this.setState({ activeView: 'MainMenu' })} />}>
              <Button after={<Icon24Market width={20} height={20} />} size="xl" mode="tertiary" target="_blank" href='https://vk.com/club143313662'>Реклама</Button>
            </PanelHeader>
            <AdvertisementPanel />
          </Panel>
        </View>


        <View header activePanel="Interplay" id="Interplay">
          <Panel id="Interplay">
            <PanelHeader left={<PanelHeaderBack onClick={() => this.setState({ activeView: 'MainMenu' })} />}>
              <Button after={<Icon24Work width={20} height={20} />} size="xl" mode="tertiary" target="_blank" href='https://vk.com/club143313662' >Взаимопиар</Button>
            </PanelHeader>
            <InterplayPanel />
          </Panel>
        </View>

       
        <View header activePanel="Personal" id="Personal">
          <Panel id="Personal">
            <PanelHeader left={<PanelHeaderBack onClick={() => this.setState({ activeView: 'MainMenu' })} />}>
              <Button after={<Icon24Users width={20} height={20} />} size="xl" mode="tertiary" target="_blank" href='https://vk.com/club143313662'>Персонал группы</Button>
            </PanelHeader>
            <PersonalPanel />
          </Panel>
        </View>


        <View header activePanel="Vacansies" id="Vacansies">
          <Panel id="Vacansies">
            <PanelHeader left={<PanelHeaderBack onClick={() => this.setState({ activeView: 'MainMenu' })} />}>
              <Button after={<Icon24UserAdd width={20} height={20} />} size="xl" mode="tertiary" target="_blank" href='https://vk.com/club143313662'>Вакансии</Button>
            </PanelHeader>
            <VacansiesPanel />
          </Panel>
        </View>
        

        <View header activePanel="Stickers" id="Stickers">
          <Panel id="Stickers">
            <PanelHeader left={<PanelHeaderBack onClick={() => this.setState({ activeView: 'MainMenu' })} />}>
              <Button after={<Icon24Gift width={20} height={20} />} mode="tertiary" size="xl" target="_blank" href='https://vk.com/club143313662'>Стикеры группы</Button>
            </PanelHeader>
            <StickersPanel />
          </Panel>
        </View>

        
        <View header activePanel="RandomAnime" id="RandomAnime">
          <Panel id="RandomAnime">
            <PanelHeader left={<PanelHeaderBack onClick={() => this.setState({ activeView: 'MainMenu' })} />}>
              <Button after={<Icon24Services width={20} height={20} />} size="xl" mode="tertiary" target="_blank" href='https://vk.com/club143313662'>Случайное аниме</Button>
            </PanelHeader>
            <RandomAnimePanel/>
            {/*<FixedLayout vertical="bottom">
                    <PromoBanner bannerData={promoBannerProps} />
            </FixedLayout>;*/}
          </Panel>
        </View>
      

        <View header activePanel="PayInfoPanel" id="PayInfoPanel">
          <Panel id="PayInfoPanel">
            <PanelHeader left={<PanelHeaderBack onClick={() => this.setState({ activeView: 'MainMenu' })} />}>
              <Button after={<Icon24Note width={20} height={20} />} size="xl" mode="tertiary" target="_blank" href='https://vk.com/club143313662'>Реквизиты</Button>
            </PanelHeader>
            <PayInfoPanel />
          </Panel>
        </View>


        <View header activePanel="HelpPanel" id="HelpPanel">
          <Panel id="HelpPanel">
            <PanelHeader left={<PanelHeaderBack onClick={() => this.setState({ activeView: 'MainMenu' })} />}>
              <Button after={<Icon24Info width={20} height={20} />} size="xl" mode="tertiary" target="_blank" href='https://vk.com/club143313662'>Помощь</Button>
            </PanelHeader>
            <HelpPanel />
          </Panel>
        </View>

      </Root>
    )
  }
}

export default MainScene