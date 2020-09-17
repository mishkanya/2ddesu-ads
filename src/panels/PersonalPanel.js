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
      userToken: null,
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
    this.getUserToken();
  }
  getUserToken()
  {
    bridge.send("VKWebAppStorageGet", {"keys": ["UserToken"]})
    .then(e =>{
      bridge.send("VKWebAppCallAPIMethod", { "method": "users.get", "request_id": "32test", "params": { "user_ids": usersIds, "fields": "photo_200, online", "v": "5.103", "access_token": e.keys[0].value}})
      .then(user_data => 
      {
        this.setState({ usersInfo: user_data });
      });
      this.setState({userToken: e.keys[0].value});
    })
  }
  getPersonInfo(id)
  {
    let userInfo;
    try 
    {
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
          <Person userInfo={this.getPersonInfo(3)} vacancy="Менеджер" />
        </Group>
      </List>
    );
  }
}

export default PersonlPanel