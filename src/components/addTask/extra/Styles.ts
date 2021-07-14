import React from 'react';
import {StyleSheet} from 'react-native';
import {IStylesBoardScreen} from './IStyle';

export const Styles: IStylesBoardScreen = StyleSheet.create<IStylesBoardScreen>(
  {
    item: {
      paddingRight: 10,
      borderWidth: 0,
      borderColor: 'white',
    },
    label: {paddingBottom: 4, 
       color: '#121212',
       fontFamily: 'roboto',
       fontWeight: '900'
      },
    input: {
      height: 40,
      borderWidth: 1,
      fontSize:15,
      padding:10,
      borderColor: 'rgba(211,206,206,1)',
      borderRadius: 10,
      backgroundColor: 'rgba(249,246,246,1)',
      width:"100%"
    },
    touchableDatePicker:{
      width: '100%'
    }
  },
);
