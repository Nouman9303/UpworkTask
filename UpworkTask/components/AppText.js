import React from 'react';
import {Text, StyleSheet} from 'react-native';
import colors from '../constants/colors';
import {DefaultTheme} from '../theme/defaultTheme';
function AppText({children, style}) {
  const {colors} = DefaultTheme();
  return <Text style={[styles.text, style]}>{children}</Text>;
}
const styles = StyleSheet.create({
  text: {fontSize: 12, color: colors.black},
});

export default AppText;
