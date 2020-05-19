import React from 'react';
import {SimpleCell, Div, Text , Button} from '@vkontakte/vkui';

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
            <SimpleCell 
                onClick={() => (this.buttonClick())}
                after={<Button after={<Icon28AddCircleOutline width={20} height={20}/>} size="l" mode="outline">Откликнуться</Button>} 
                before={this.getIcon()}
            >
                {this.props.name}
            </SimpleCell>
            {this.state.viewInfo == true? 
                <Text>
                    {this.props.description}
                </Text> 
                : null 
            } 
      </Div>
    );
  }
}

export default Vacancy