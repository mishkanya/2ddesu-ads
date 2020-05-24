import React from 'react';
import { List, Group } from '@vkontakte/vkui';
import Person from './Person';
import bridge from '@vkontakte/vk-bridge';

let usersIds = "372864591, 542678732,179344877, 534664876, 289576559, 593244826";
class PersonlPanel extends React.Component {

  constructor(props) {
    super(props);

    this.state =
    {
      usersInfo: null,
    };
  }

  options() {
    let options = [];
    for (let i = 0; i <= 10; i += 2) {
      options.push(<option value={`${i / 10}`} key={`${i}`}>{i / 10}</option>)
    }
    return options;
  }
  componentWillMount() {
    let token;
    bridge.send("VKWebAppStorageGet", {"keys": ["UserToken"]})
    .then(e => {
      if(e.keys[0].value == false){
        bridge.send("VKWebAppGetAuthToken", { "app_id": 7367088, "scope": "docs" })
        .then(data => 
        {
          token = data.access_token;
          bridge.send("VKWebAppCallAPIMethod", { "method": "users.get", "request_id": "32test", "params": { "user_ids": usersIds, "fields": "photo_200, online", "v": "5.103", "access_token": token } })
          .then(user_data => {
            this.setState({ usersInfo: user_data });
          });
        })
        .catch(() => {
          console.log("Мы не получили токен");
          this.setState({ mainText: "Вы не дали доступ приложению..." });
        });
      }
      else
      {
        token = e.keys[0].value;
        bridge.send("VKWebAppCallAPIMethod", { "method": "users.get", "request_id": "32test", "params": { "user_ids": usersIds, "fields": "photo_200, online", "v": "5.103", "access_token": token } })
      .then(user_data => {
        this.setState({ usersInfo: user_data });
      });
      }
    })
    .catch(e => (console.log(e)));
  }
  setUserData
  getPersonInfo(id) {
    let userInfo;
    try {
      userInfo = this.state.usersInfo.response[id];
    }
    catch
    {
      userInfo = "";
    }
    return userInfo;
  }
  render() {
    return (
      <List>
        <Group>
          <Person userInfo={this.getPersonInfo(0)} vacancy="Владелец" />
        </Group>
        <Group>
          <Person userInfo={this.getPersonInfo(1)} vacancy="Зам. владельца" />
        </Group>
        <Group>
          <Person userInfo={this.getPersonInfo(3)} vacancy="Менеджер" />
        </Group>
        <Group>
          <Person userInfo={this.getPersonInfo(2)} mode="streamer" vacancy="Стример" projectLink="https://www.twitch.tv/dantis" />
        </Group>
        <Group>
          <Person userInfo={this.getPersonInfo(4)} mode="painter" vacancy="Художник" projectLink="https://vk.com/galleryoffd" />
        </Group>
        <Group>
          <Person userInfo={this.getPersonInfo(5)} vacancy="Ангельский голосок" />
        </Group>
      </List>
    );
  }
}

export default PersonlPanel