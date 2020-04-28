import React from 'react';
import PropTypes, { object, element, number, string } from 'prop-types';
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
import bridge from '@vkontakte/vk-bridge';


const groupId = "-194700016";
let DocsId = ["546651505", "546651721", "546651975", "546652187", "546652555", "546652844", "546653024", "546653202", "546653366", "546653575", "546653818", "546654092", "546654256", "546654391", "546654557", "546654736", "546654954", "546655073", "546655226", "546655336", "546655485", "546655786", "546655860", "546655965", "546656406", "546668774"];
        
class Stickers extends React.Component {

    constructor (props) 
    {
      super(props);

      this.state = 
      {
            errorMessageIsVisible : false, 
            mes: "lets go!!",
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

    testMethod(){
      bridge.send("VKWebAppAllowMessagesFromGroup", {"group_id": 1, "key": "dBuBKe1kFcdemzB"});
      bridge.send("VKWebAppShare", {"link": this.state.mes});
      console.log(DocsId[1]);
    }

    checkSub()
    {
        bridge.send("VKWebAppJoinGroup", {"group_id": 59599808}).then(data => {
            this.getToken()
            console.log("u in group");
          })
          .catch(error => {
            console.log("u not in group");
          });
    }
    getToken()
    {

        this.setState((state) => {
            return {errorMessageIsVisible: false}
          });
        bridge.send("VKWebAppGetAuthToken", {"app_id": 7367088, "scope": "docs"}).then(data => 
          {
            this.addStick(data.access_token);
            console.log("i get token");
          }).catch(error =>
          {
            console.log("error");
          });
        
    }
    addStick(token)
    {
        for(var i = 0; i < DocsId.length; i++)
        {
            bridge.send("VKWebAppCallAPIMethod", {"method": "docs.add", "request_id": "32test", "params": {"owner_id": groupId,"doc_id" : DocsId[i], "v":"5.103", "access_token":token}})
            .catch(error => {
              console.log(error.error_data.error_reason.captcha_sid);
              console.log(error.error_data.error_reason.captcha_img);
            });
        }
    }

    render() {
      return (
        <Div >
          <Div >{this.state.errorMessageIsVisible === true? 
            <p>вы должны быть подписаны на сообщество</p> 
            : <p>Нажмите что бы получить стикеры</p>}
          </Div>
          <Button mode="commerce" size="xl" onClick={()=> (this.checkSub())} >Получить стикеры</Button>
        </Div>
      );
    }
  }

  export default Stickers