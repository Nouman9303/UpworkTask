import React, {useState, useEffect} from 'react';

import {useDispatch, useSelector} from 'react-redux';
// import { DELETED_ACTION } from '../redux/types';
import {light} from '../theme/lightTheme';
import {dark} from '../theme/darkTheme';
export const DefaultTheme = () => {
  const [colors, setColors] = useState();
  const theme = useSelector(state => state.theme.theme);

  useEffect(() => {
    setColors(theme == 'light' ? light : dark);
  }, [theme]);

  return {
    colors,
  };
};
