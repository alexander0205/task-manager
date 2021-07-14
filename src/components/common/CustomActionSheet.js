import React from 'react';
import {Item, Input, Label} from 'native-base';
import {ActionSheet} from 'native-base';
import {TouchableOpacity} from 'react-native';

export default function CustomActionSheet({
  title,
  value,
  onChangeValue,
  Styles,
  OptionsArray,
}) {
  const BUTTONS = [...OptionsArray, 'Cancel'];
  const cancelButtonIndex = BUTTONS.length - 1;
  const handlePress = () => {
    ActionSheet.show(
      {
        options: BUTTONS,
        cancelButtonIndex,
        destructiveButtonIndex: BUTTONS.length - 2,
        title: title,
      },
      buttonIndex => {
        console.log(buttonIndex);
        if (buttonIndex >= 0 && cancelButtonIndex != buttonIndex) {
          onChangeValue(BUTTONS[buttonIndex]);
        }
      },
    );
  };

  return (
    <Item style={Styles.item} stackedLabel>
      <Label style={Styles.label}>{title}</Label>
      <TouchableOpacity
        style={Styles.touchableDatePicker}
        // eslint-disable-next-line no-undef
        onPress={() => handlePress()}>
        <Input
          disabled
          value={value}
          onPressIn={() => handlePress()}
          style={Styles.input}
        />
      </TouchableOpacity>
    </Item>
  );
}
