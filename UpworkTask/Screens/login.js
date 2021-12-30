import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  ActivityIndicator,
  SafeAreaView,
} from 'react-native';
import * as Yup from 'yup';

// import colors from '../constants/colors';
import ToggleSwitch from 'toggle-switch-react-native';
import AppForm from '../components/form/AppForm';
import AppFormField from '../components/form/AppFormField';
import AppFormButton from '../components/form/AppFormButton';
import AppText from '../components/AppText';
import {UpworkApi} from '../network/https';
import {useSelector, useDispatch} from 'react-redux';
import {loginInfo} from '../redux/slice/authSlice';
//validation schema
import {DefaultTheme} from '../theme/defaultTheme';
import {setTheme} from '../redux/slice/themeSlice';
const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Must be a valid email')
    .required('Email is required')
    .label('Email'),
  password: Yup.string()
    .required('Password is required')
    .min(1)
    .label('Password'),
});

function Login() {
  const dispatch = useDispatch();
  const theme = useSelector(state => state.theme.theme);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState();
  const {colors} = DefaultTheme();
  const [toggle, setToggle] = useState(false);

  const handleLogin = body => {
    try {
      let data = {
        username: body.email,
        password: body.password,
      };
      UpworkApi()
        .post('/connect/token', data)
        .then(response => {
          setLoading(false);
        })

        .catch(error => {
          setLoading(false);
          setErrorMsg(error?.response?.data?.error);
        });
    } catch (error) {
      setLoading(false);
      setErrorMsg(error?.response?.data?.error);
    }
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={[styles.container, {backgroundColor: colors?.background}]}>
        <View
          style={[
            styles.eclipse,
            {backgroundColor: theme == 'light' ? 'red' : 'blue'},
          ]}
        />
        <ScrollView showsVerticalScrollIndicator={false}>
          <AppForm
            initialValues={{
              email: '',
              password: '',
            }}
            onSubmit={async values => {
              dispatch(loginInfo(values));
              setErrorMsg(null);
              setLoading(true);
              handleLogin(values);
            }}
            validationSchema={validationSchema}
            Splash>
            <View style={styles.verticalDividerWithCustomHeight}>
              <View style={styles.formContainer}>
                <AppFormField
                  autoCapitalize="none"
                  autoCorrect={false}
                  keyboardType="email-address"
                  name="email"
                  placeholder="Email"
                  textContentType="emailAddress"
                />
                <AppFormField
                  autoCapitalize="none"
                  autoCorrect={false}
                  name="password"
                  placeholder="Password"
                  secureTextEntry
                  textContentType="password"
                />

                <AppFormButton
                  disable={loading}
                  style={[styles.button, {borderColor: colors?.border}]}
                  name={'Save'}
                />

                {loading ? (
                  <ActivityIndicator color={colors.danger} size="large" />
                ) : null}
              </View>
            </View>
          </AppForm>
          {errorMsg && (
            <AppText style={[styles.errorMsg, {color: colors.danger}]}>
              {errorMsg}
            </AppText>
          )}
          <ToggleSwitch
            isOn={toggle}
            onColor={colors?.eclipse}
            offColor={colors?.eclipse}
            label="Theme"
            labelStyle={[
              styles.toggleLable,
              {
                color: colors?.text,
              },
            ]}
            size="large"
            onToggle={isOn => {
              setToggle(isOn ? true : false);
              dispatch(setTheme(isOn ? 'Dark' : 'light'));
            }}
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  formContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  errorMsg: {
    marginBottom: 10,
    fontSize: 17,
    paddingHorizontal: 20,
  },
  button: {
    height: 50,
    width: '80%',
    borderWidth: 0.5,
    marginVertical: 10,
  },
  eclipse: {
    width: 50,
    height: 50,
    borderRadius: 50,
    position: 'absolute',
    top: 10,
    right: 10,
  },
  toggleLable: {
    fontWeight: '900',

    marginLeft: 20,
  },
});

export default Login;
