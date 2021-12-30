import React from 'react';
import {StyleSheet, TextInput} from 'react-native';
import {useFormikContext} from 'formik';

import ErrorMessage from './ErrorMessage';
import {DefaultTheme} from '../../theme/defaultTheme';
const AppFormField = ({
  name,

  ...otherProps
}) => {
  const {
    setFieldTouched,
    handleChange,

    errors,
    touched,
    values,
  } = useFormikContext();
  const {colors} = DefaultTheme();
  return (
    <>
      <TextInput
        value={'' || values[name]}
        onBlur={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
        placeholderTextColor={colors?.black}
        style={[
          styles.input,
          {borderColor: colors?.border, color: colors?.text},
        ]}
        {...otherProps}
      />

      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
};

const styles = StyleSheet.create({
  horizontalDivider: {
    flex: 1,
    flexDirection: 'row',
  },
  input: {
    height: 50,
    marginVertical: 10,
    width: '80%',
    borderWidth: 0.5,
    paddingHorizontal: 10,
  },
});

export default AppFormField;
