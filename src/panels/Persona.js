import React from 'react';
import {Div, Avatar, SimpleCell, Button, Link, RichCell} from '@vkontakte/vkui';
import bridge from '@vkontakte/vk-bridge';

import Icon28Notifications from '@vkontakte/icons/dist/28/notifications';
import Icon28NotificationDisableOutline from '@vkontakte/icons/dist/28/notification_disable_outline';
import Icon24LinkCircle from '@vkontakte/icons/dist/24/link_circle';

class Persona extends React.Component {

    constructor(props) {
        super(props);

        this.state =
        {
        };
    }

    options() {
        let options = [];
        for (let i = 0; i <= 10; i += 2) {
            options.push(<option value={`${i / 10}`} key={`${i}`}>{i / 10}</option>)
        }
        return options;
    }
    getUserName() {
        return<Link target="_blank" href={"https://vk.com/id" + this.props.userInfo.id}>{this.props.userInfo.last_name + " " + this.props.userInfo.first_name}</Link>
    }

    render() {
        return (
            <Div >
                <RichCell 
                    before={<Avatar target="_blank" href={"https://vk.com/id" + this.props.userInfo.id} size={48} src={this.props.userInfo.photo_200} />}
                    after={
                            <Button 
                            target="_blank" 
                            size="m"
                            href={"https://vk.me/id" + this.props.userInfo.id} 
                            mode="outline" 
                            after={this.props.userInfo.online == 1 ? 
                                    <Icon28Notifications width={20} height={20} /> : 
                                    <Icon28NotificationDisableOutline width={20} height={20} 
                            />}>
                                Написать
                            </Button>
                        }
                    caption={this.props.vacancy}
                >
                    {this.getUserName()}
                </RichCell>
                {this.props.projectLink != null? 
                    <Button 
                        after={<Icon24LinkCircle width={20} height={20}/>}
                        target="_blank" 
                        href={this.props.projectLink} 
                        mode="outline"
                    > 
                        Личный проект
                    </Button> : null
                }
            </Div>
        );
    }
}

export default Persona