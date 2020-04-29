import React from 'react';
import PropTypes, { object, element, number, string } from 'prop-types';
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
import Progress from '@vkontakte/vkui/dist/components/Progress/Progress';
import Text from '@vkontakte/vkui/dist/components/Typography/Caption/Caption';
import bridge from '@vkontakte/vk-bridge';
import stickerImg from '../img/tickers.png'


const groupId = "-194700016";
let DocsId = ["546651505", "546651721", "546651975", "546652187", "546652555", "546652844", "546653024", "546653202", "546653366", "546653575", "546653818", "546654092", "546654256", "546654391", "546654557", "546654736", "546654954", "546655073", "546655226", "546655336", "546655485", "546655786", "546655860", "546655965", "546656406", "546668774"];
        
class Stickers extends React.Component {

    constructor (props) 
    {
      super(props);

      this.state = 
      {
            processBar : false, 
            process : 0,
            docId : 0,
            token: "",
            textValue:'',
            mainText:'Нажмите что бы получить стикеры',
            //mainText:'Нажмите что бы получить стикеры',

            viewCaptcha: false,
            captchaSid:0,
            captchaImg:"",
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
      
      bridge.send("VKWebAppShare", {"link": this.state.mes});
      console.log(DocsId[1]);
    }

    checkSub()
    {
        bridge.send("VKWebAppJoinGroup", {"group_id": 143313662}).then(data => {
            this.getToken()
            //console.log("u in group");
            this.setState({mainText: "Нам необходим доступ к вашим документам, что бы мы автоматически добавили вам стикеры"});
          })
          .catch(error => {
            this.setState({mainText: "Вы не подписались!"});
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
            this.setState({token: data.access_token});
            this.addStick(this.state.token);
            this.setState({processBar : true});
          }).catch(error =>{
            console.log("i dont get token");
            this.setState({mainText: "Вы не дали доступ приложению..."});
          });
    }
    addStick(token)
    {
        this.setState({mainText: "Добавляем стикеры"});
        bridge.send("VKWebAppCallAPIMethod", {"method": "docs.add", "request_id": "32test", "params": {"owner_id": groupId,"doc_id" : DocsId[this.state.docId], "v":"5.103", "access_token":token}})
        .then(e=> {
            this.setState({docId: this.state.docId + 1});
            console.log(DocsId.length);
            console.log(this.state.docId);
            if(this.state.docId < DocsId.length)
            {
                setTimeout(function () {
                    this.addStick(this.state.token);
                    this.setState({process : (this.state.docId / DocsId.length) * 100})
                }.bind(this), 200);
            }
            else
            {
                this.setState({mainText: 'Стикеры были добавлены!'});
                this.setState({processBar : false});
            }
        })
        .catch(error => 
        {
          try{
            if(error.error_data.error_reason.error_code === 14)
            {
              this.setState({mainText: "Введите капчу"});
              this.setState({viewCaptcha: true});
              this.setState({captchaImg: error.error_data.error_reason.captcha_img});
              this.setState({captchaSid: error.error_data.error_reason.captcha_sid});
            }
            else
            {
              console.log(error);
            }
          }
          catch{
            console.log(error);
            console.log("Blyaaaaaaaaaaaaaat`");
          }
          
        });
    }
    submiteCaptcha()
    {
        var capthaText = this.state.textValue;
        bridge.send("VKWebAppCallAPIMethod", {"method": "docs.add", "request_id": "32test", "params": {"owner_id": groupId,"doc_id" : DocsId[this.state.docId], "v":"5.103", "access_token":this.state.token, "captcha_sid" : this.state.captchaSid, "captcha_key" : capthaText}}).
        then(e =>
        {
            this.setState({viewCaptcha: false});
            console.log(e);
            this.setState({docId: this.state.docId + 1});
            if(this.state.docId < DocsId.length)
            {
              this.addStick(this.state.token);
            }
        }).
        catch(error => 
        {
            this.setState({captchaImg: error.error_data.error_reason.captcha_img});
            this.setState({captchaSid: error.error_data.error_reason.captcha_sid});
            console.log("У вас ошибОчка:" + error);
            this.setState({mainText: 'Капча разгаданна не правильно'});
        });
        
    }

    render() {
      return (
        <Div >
          <Div>
              <Div>{this.state.mainText}</Div>
                {this.state.processBar? 
                <Div><Progress value={this.state.process}/></Div> 
                : null } 
          </Div>
            {this.state.viewCaptcha === true? 
                <Card style={{ marginBottom: 5 }}>
                    <Cell 
                        before = {<img style={{borderRadius : "5px"}} src={this.state.captchaImg} 
                        alt="Logo"/>}>

                        <Input onChange={e => (this.setState({textValue: e.target.value }))} value={this.state.textValue} placeholder = "Введите капчу"/>
                        <Button size="xl" onClick={()=> (this.setState({textValue: "" }), this.submiteCaptcha())}>Отправить</Button>
                    </Cell>
                </Card>
                :null
            }
            <Card align="center" onClick={()=> (this.checkSub())}  >
                <img  src={stickerImg} width={"60%"} height={"60%"}></img>
                <Button mode="commerce" size="xl"   >Получить стикеры</Button>
            </Card>
        </Div>
      );
    }
  }

  export default Stickers