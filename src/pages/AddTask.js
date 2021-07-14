import React, {useState} from 'react';
import Index from '../components/addTask/Index';
import {connect} from 'react-redux';
import {TASK_STATUS} from '../entities/enums/index';
import {CreateUID} from '../utils/index';
import PropTypes from 'prop-types';
import {setTask} from '../configureStore/actions/tasks';
import {REMINDER_DATA, REPEAT_DATA} from '../resource/actionSheetData';

const DEFAULT_STATUS = TASK_STATUS.UNCOMPLETED;
function AddTask({setTask, navigation}) {
  const [title, SetTitle] = useState(false);
  const [deadLine, SetDeadLine] = useState(new Date());
  const [starTime, SetStartTime] = useState(new Date());
  const [endTime, SetEndTime] = useState(new Date());
  const [remind, SetRemind] = useState('');
  const [repeat, SetRepeat] = useState('');

  const form = {
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
  };

  const handlerClickAddTask = () => {
    const data = {
      status: DEFAULT_STATUS,
      title,
      id: CreateUID(),
      //   deadLine,
      //   starTime,
      //   endTime,
      remind,
      repeat,
    };
    setTask(data);
    navigation.goBack();
  };

  return (
    <Index
      REPEAT_DATA={REPEAT_DATA}
      REMINDER_DATA={REMINDER_DATA}
      form={form}
      handlerClickAddTask={handlerClickAddTask}
    />
  );
}
AddTask.propTypes = {
  setTask: PropTypes.func,
  navigation: PropTypes.func,
};
const mapDispatchToProps = {setTask};

export default connect(null, mapDispatchToProps)(AddTask);
