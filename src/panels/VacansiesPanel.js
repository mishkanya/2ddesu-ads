import React from 'react';
import { List, Div, Group, Button } from '@vkontakte/vkui';
import Vacancy from './Vacancy'

class VacansiesPanel extends React.Component {

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

  render() {
    return (
      <Div >
        <List>
          <Group>
            <Vacancy icon="non" name="Пока что пусто" description="Как только нам понадобятся новые работники, здесь появятся вакансии" />
          </Group>
        </List>
      </Div>
    );
  }
}

export default VacansiesPanel