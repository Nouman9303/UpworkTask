import React from 'react';
import {useFormikContext} from 'formik';
import {TouchableOpacity, StyleSheet} from 'react-native';
import AppText from '../AppText';

import {DefaultTheme} from '../../theme/defaultTheme';
function SubmitButton({name, style, disable}) {
  const {handleSubmit} = useFormikContext();
  const {colors} = DefaultTheme();
  return (
    <TouchableOpacity
      style={[styles.conatiner, style]}
      onPress={() => {
        disable ? null : handleSubmit();
      }}>
      <AppText style={[styles.text, {color: colors?.text}]}>{name}</AppText>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  text: {
    fontSize: 17,
  },
  conatiner: {
    height: 50,
    width: '80%',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SubmitButton;
