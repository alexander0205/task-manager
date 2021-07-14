import React from 'react';
import {
  Container,
  Content,
  List,
  ListItem,
  Text,
  Left,
  Right,
} from 'native-base';
import ButtonCenterBottom from '../common/ButtonCenterBottom';
import CheckBox from '@react-native-community/checkbox';
import {TASK_STATUS} from '../../entities/enums/index';
var randomColor = () => Math.floor(Math.random() * 16777215).toString(16);
export default function ListTask({
  tasks,
  handlerClickAddTask,
  handlerClickCheckBox,
}) {
  return (
    <Container>
      <Content>
        <List>
          {tasks?.map((x, index) => (
            <ListItem key={`ListItem_${index}`}>
              <CheckBox
                onTintColor={`#${randomColor()}`}
                key={`CheckBox_${index}`}
                onValueChange={value => handlerClickCheckBox(value, x)}
                value={x.status === TASK_STATUS.COMPLETED ? true : false}
              />
              <Left>
                <Text> {x.title}</Text>
              </Left>
              <Right>{/* <Icon name="arrow-forward" /> */}</Right>
            </ListItem>
          ))}
        </List>
      </Content>
      <ButtonCenterBottom
        handlerClick={handlerClickAddTask}
        title="Add a task"
      />
    </Container>
  );
}
