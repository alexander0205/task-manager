import React from 'react';
import {
  Container,
  Content,
  List,
  ListItem,
  Text,
  Left,
  Right,
  Button,
  View,
} from 'native-base';
import {Styles} from './extra/Styles';
export default function ButtonCenterBottom({handlerClick, title}) {
  return (
    <View style={[Styles.buttonCenterList]}>
      <Button onPress={handlerClick} block success>
        <Text>{title}</Text>
      </Button>
    </View>
  );
}
