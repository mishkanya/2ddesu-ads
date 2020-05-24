import React from 'react';
import { Div, Button, Cell, Card, CellButton, Progress, Input } from '@vkontakte/vkui';
import bridge from '@vkontakte/vk-bridge';
import stickerImg from '../img/tickers.png'
import copy from 'copy-to-clipboard';


//#region icons
import Icon28ErrorOutline from '@vkontakte/icons/dist/28/error_outline';
//#endregion

const groupId = "-194700016";
let DocsId = ["546651505", "546651721", "546651975", "546652187", "546652555", "546652844", "546653024", "546653202", "546653366", "546653575", "546653818", "546654092", "546654256", "546654391", "546654557", "546654736", "546654954", "546655073", "546655226", "546655336", "546655485", "546655786", "546655860", "546655965", "546656406", "546668774", "547564255"];

class StickersPanel extends React.Component {

  constructor(props) {
    super(props);
    setTimeout(function () {
      this.checkPlatform();
    }.bind(this), 200);
    this.state =
    {
      processBar: false,
      process: 0,
      docId: 0,
      token: "",
      textValue: '',
      mainText: 'Нажмите что бы получить стикеры',
      isMobilVersion: true,

      viewCaptcha: false,
      captchaSid: 0,
      captchaImg: "",
    };
  }

  options() {
    let options = [];
    for (let i = 0; i <= 10; i += 2) {
      options.push(<option value={`${i / 10}`} key={`${i}`}>{i / 10}</option>)
    }
    return options;
  }
  checkPlatform() {
    this.setState({
      isMobilVersion: bridge.send("VKWebAppGetClientVersion", {})
        .then(data => {
          console.log(data);
          if (data.platform == "web") {
            this.setState({ isMobilVersion: false });
          }
          else {
            this.setState({ mainText: 'Ошибка сайта' });
          }
        })
        .catch(error => {
          this.setState({ mainText: 'Ошибка сайта' });
          console.log(error);
        })
    });
  }

  checkSub() {
    bridge.send("VKWebAppJoinGroup", { "group_id": 143313662 })
      .then(() => {
        this.getToken()
        console.log("Вы в группе");
        this.setState({ mainText: "Нам необходим доступ к вашим документам, что бы мы автоматически добавили вам стикеры" });
      })
      .catch(() => {
        this.setState({ mainText: "Вы не подписались!" });
        console.log("Вы в группе");
      });
  }

  getToken() {
    this.setState(() => {
      return { errorMessageIsVisible: false }
    });
    bridge.send("VKWebAppStorageGet", {"keys": ["UserToken"]}).then(e => {
      if(e.keys[0].value == false){
        bridge.send("VKWebAppGetAuthToken", { "app_id": 7367088, "scope": "docs" })
              .then(data => {
                console.log("Мы получили токен");
                this.setState({ token: data.access_token });
                this.addStick(this.state.token);
                this.setState({ processBar: true });
              })
              .catch(() => {
                console.log("Мы не получили токен");
                this.setState({ mainText: "Вы не дали доступ приложению..." });
              });
      }
      else
      {
        this.setState({ token: e.keys[0].value});
        this.addStick(this.state.token);
        this.setState({ processBar: true });
      }
    }).catch(e => (console.log(e)));
  }

  addStick(token) {
    this.setState({ mainText: "Добавляем стикеры" });
    bridge.send("VKWebAppCallAPIMethod", { "method": "docs.add", "request_id": "32test", "params": { "owner_id": groupId, "doc_id": DocsId[this.state.docId], "v": "5.103", "access_token": token } })
      .then(() => {
        console.log((this.state.docId + 1) + " стикеров из " + DocsId.length + " добавлены");
        this.setState({ docId: this.state.docId + 1 });
        if (this.state.docId < DocsId.length) {
          setTimeout(function () {
            this.addStick(this.state.token);
            this.setState({ process: (this.state.docId / DocsId.length) * 100 })
          }
            .bind(this), 200);
        }
        else {
          this.setState({ mainText: 'Стикеры были добавлены!' });
          this.setState({ processBar: false });
        }
      })
      .catch(error => {
        try {
          if (error.error_data.error_reason.error_code === 14) {
            console.log("Ошибка на ввод капчи");
            console.log(error);
            this.setState({ mainText: "Введите капчу" });
            this.setState({ viewCaptcha: true });
            this.setState({ captchaImg: error.error_data.error_reason.captcha_img });
            this.setState({ captchaSid: error.error_data.error_reason.captcha_sid });
          }
        }
        catch
        {
          console.log("Другая ошибка или ошика на мобильном клиенте");
          console.log(error);
          if (error.error_data.error_code == 14) {
            this.setState({ mainText: "Введите капчу" });
            this.setState({ viewCaptcha: true });
            this.setState({ captchaImg: error.error_data.error_reason.captcha_img });
            this.setState({ captchaSid: error.error_data.error_reason.captcha_sid });
          }
        }
      });
  }

  submiteCaptcha() {
    var capthaText = this.state.textValue;
    bridge.send("VKWebAppCallAPIMethod", { "method": "docs.add", "request_id": "32test", "params": { "owner_id": groupId, "doc_id": DocsId[this.state.docId], "v": "5.103", "access_token": this.state.token, "captcha_sid": this.state.captchaSid, "captcha_key": capthaText } })
      .then(() => {
        console.log("Корректный ввод каптчи");
        console.log((this.state.docId + 1) + " стикеров из " + DocsId.length + " добавлены");
        this.setState({ viewCaptcha: false });
        this.setState({ docId: this.state.docId + 1 });
        if (this.state.docId < DocsId.length) {
          this.addStick(this.state.token);
        }
      })
      .catch(error => {
        console.log("Некорректный ввод каптчи");
        console.log(error);
        this.setState({ captchaImg: error.error_data.error_reason.captcha_img });
        this.setState({ captchaSid: error.error_data.error_reason.captcha_sid });
        this.setState({ mainText: 'Капча разгаданна не правильно' });
      });
  }
  loadInBrowser = () => {
    copy("https://vk.com/app7367088_372864591");
  };

  render() {
    return (
      <Div >
        <Div>
          <Div>{this.state.mainText}</Div>
          {this.state.processBar ?
            <Div><Progress value={this.state.process} /></Div>
            :
            null
          }
        </Div>
        {this.state.viewCaptcha === true ?
          <Card style={{ marginBottom: 5 }}>
            <Cell
              before={<img style={{ borderRadius: "5px" }} src={this.state.captchaImg}
                alt="Logo" />}>
              <Input onChange={e => (this.setState({ textValue: e.target.value }))} value={this.state.textValue} placeholder="Введите капчу" />
              <Button size="xl" onClick={() => (this.setState({ textValue: "" }), this.submiteCaptcha())}>Отправить</Button>
            </Cell>
          </Card>
          : null
        }
        {this.state.isMobilVersion ?
          <Div>
            <CellButton before={<Icon28ErrorOutline />}>В мобильном приложениии ВКонтакте выдача стикеров не доступна, но вы можете получить их в веб версии приложения</CellButton>
            <Button align="center" size="xl" onClick={this.loadInBrowser}>Нажми что бы скопировать ссылку</Button>
          </Div>
          :
          <Card align="center" onClick={() => (this.checkSub())}  >
            <img src={stickerImg} width={"60%"} height={"60%"}></img>
            <Button mode="commerce" size="xl"   >Получить стикеры</Button>
          </Card>
        }

      </Div>
    );
  }
}

export default StickersPanel