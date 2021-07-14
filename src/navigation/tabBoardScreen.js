import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import BoardScreen from '../pages/BoardScreen';
import {TASK_STATUS} from '../entities/enums/index';
const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="All"
        component={BoardScreen}
        initialParams={{TASK_STATUS_TYPE: TASK_STATUS.ALL}}
      />
      <Tab.Screen
        name="Completed"
        component={BoardScreen}
        initialParams={{TASK_STATUS_TYPE: TASK_STATUS.COMPLETED}}
      />
      <Tab.Screen
        name="Uncompleted"
        component={BoardScreen}
        initialParams={{TASK_STATUS_TYPE: TASK_STATUS.UNCOMPLETED}}
      />
    </Tab.Navigator>
  );
}
export default MyTabs;
