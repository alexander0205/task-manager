import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Index from '../components/boardScreen/Index';
import {NAVIGATION_SCREENS, TASK_STATUS} from '../entities/enums/index';
import {changeStatus} from '../configureStore/actions/tasks';
export const BoardScreen = ({navigation, route, tasks, changeStatus}) => {
  const {TASK_STATUS_TYPE} = route.params;

  const _tasks = filterTask(TASK_STATUS_TYPE, tasks);

  const handlerClickAddTask = () =>
    navigation.navigate(NAVIGATION_SCREENS.ADD_TASK);

  const handlerClickCheckBox = (value, _data) => {
    const status = value ? TASK_STATUS.COMPLETED : TASK_STATUS.UNCOMPLETED;
    const id = _data.id;
    const datToRedux = {
      id,
      status,
    };

    changeStatus(datToRedux);
  };

  return (
    <Index
      tasks={_tasks}
      handlerClickCheckBox={handlerClickCheckBox}
      handlerClickAddTask={handlerClickAddTask}
    />
  );
};

BoardScreen.propTypes = {
  navigation: PropTypes.object,
  route: PropTypes.object,
  tasks: PropTypes.array,
  changeStatus: PropTypes.func,
};

const mapStateToProps = ({tasks}) => ({tasks});

const mapDispatchToProps = {changeStatus};

export default connect(mapStateToProps, mapDispatchToProps)(BoardScreen);
function filterTask(TASK_STATUS_TYPE, tasks) {
  switch (TASK_STATUS_TYPE) {
    case TASK_STATUS.COMPLETED:
      return tasks.filter(x => x.status === TASK_STATUS.COMPLETED);
    case TASK_STATUS.UNCOMPLETED:
      return tasks.filter(x => x.status === TASK_STATUS.UNCOMPLETED);
    default:
      return tasks;
  }
}
