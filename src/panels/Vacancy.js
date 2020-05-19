import React from 'react';
import {SimpleCell, Div, Text , Button, Card} from '@vkontakte/vkui';

//#region icons
import Icon28CancelCircleOutline from '@vkontakte/icons/dist/28/cancel_circle_outline';
import Icon28MoreHorizontal from '@vkontakte/icons/dist/28/more_horizontal';
import Icon24DoNotDisturb from '@vkontakte/icons/dist/24/do_not_disturb';
import Icon28ReportOutline from '@vkontakte/icons/dist/28/report_outline';
import Icon28SmileOutline from '@vkontakte/icons/dist/28/smile_outline';
import Icon28AddCircleOutline from '@vkontakte/icons/dist/28/add_circle_outline';//плюсик
//#endregion

class Vacancy extends React.Component {

  constructor(props) {
    super(props);

    this.state =
    {
        viewInfo: false,
    };
  }

  options() {
    let options = [];
    for (let i = 0; i <= 10; i += 2) {
      options.push(<option value={`${i / 10}`} key={`${i}`}>{i / 10}</option>)
    }
    return options;
  }
  buttonClick(){
    this.setState({ viewInfo: !this.state.viewInfo });
  }
  getIcon(){
      switch (this.props.icon) {
          case "non":
              return <Icon28ReportOutline width={20} height={20}/>;
      
          default:
              return <Icon28SmileOutline width={20} height={20}/>;
      }
  }

  render() {
    return (
      <Div>
          <Card>
            <SimpleCell 
                onClick={() => (this.buttonClick())}
                before={this.getIcon()}
                after={<Icon28MoreHorizontal width={24} height={24}/>}
            >
                {this.props.name}
            </SimpleCell>
            <Div>
                {this.state.viewInfo == true? 
                    <Text>
                        {this.props.description}
                    </Text> 
                    : null 
                } 
            </Div>
            <Div align="center">
                <Button target="_blank" href={"https://vk.me/club143313662"} after={<Icon28AddCircleOutline width={20} height={20}/>} mode="outline">Откликнуться</Button>
            </Div>
          </Card>
            
            
      </Div>
    );
  }
}

export default Vacancy