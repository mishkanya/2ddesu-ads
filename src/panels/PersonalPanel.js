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
    bridge.send("VKWebAppCallAPIMethod", { "method": "users.get", "request_id": "32test", "params": { "user_ids": usersIds, "fields": "photo_200, online", "v": "5.103", "access_token": "1a7cdee11a7cdee11a7cdee1831a0cb75111a7c1a7cdee14408388386a75fcfaf979b65" } })
      .then(user_data => {
        this.setState({ usersInfo: user_data });
      });
  }
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