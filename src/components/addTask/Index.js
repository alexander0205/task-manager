import React from 'react';

import {
  Container,
  Content,
  Form,
  Item,
  Input,
  Label,
  View,
  Button,
  Text,
} from 'native-base';
import CustomDatePicker from '../common/CustomDatePicker';
import CustomActionSheet from '../common/CustomActionSheet';
import ButtonCenterBottom from '../common/ButtonCenterBottom';

import {Styles} from './extra/Styles';
import {Col, Grid} from 'react-native-easy-grid';
export default function ListTask({
  handlerClickAddTask,
  REPEAT_DATA,
  REMINDER_DATA,
  form,
}) {
  const {
    title,
    SetTitle,
    deadLine,
    SetDeadLine,
    starTime,
    SetStartTime,
    endTime,
    SetEndTime,
    remind,
    SetRemind,
    repeat,
    SetRepeat,
  } = form;

  return (
    <Container>
      <Content>
        <Form>
          <Item style={Styles.item} stackedLabel>
            <Label style={Styles.label}>Title</Label>
            <Input
              placeholder="Design team meeting"
              value={title}
              style={Styles.input}
              onChangeText={text => SetTitle(text)}
            />
          </Item>
          <CustomDatePicker
            title="Deadline"
            Styles={Styles}
            value={deadLine}
            onChangeValue={SetDeadLine}
          />

          <Grid>
            <Col>
              <CustomDatePicker
                title="Start Time"
                Styles={Styles}
                value={starTime}
                mode="time"
                onChangeValue={SetStartTime}
              />
            </Col>
            <Col>
              <CustomDatePicker
                title="Start Time"
                Styles={Styles}
                value={endTime}
                mode="time"
                onChangeValue={SetEndTime}
              />
            </Col>
          </Grid>
          <CustomActionSheet
            title="Remind"
            Styles={Styles}
            value={remind}
            mode="time"
            OptionsArray={REMINDER_DATA}
            onChangeValue={SetRemind}
          />
          <CustomActionSheet
            title="Repeat"
            Styles={Styles}
            value={repeat}
            mode="time"
            OptionsArray={REPEAT_DATA}
            onChangeValue={SetRepeat}
          />
        </Form>
      </Content>
      <ButtonCenterBottom
        title="Create a task"
        handlerClick={handlerClickAddTask}
      />
    </Container>
  );
}
