import {StyleSheet} from 'react-native';

import theme from '../../../resources/Colors/theme';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: theme.tertiary_color + 'ea',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  welcomeImageBackground: {
    flex: 1,
    justifyContent: 'center',
  },
  welcomeImageStyle: {
    resizeMode: 'cover',
    borderBottomLeftRadius: theme.large_border_radius,
    borderBottomRightRadius: theme.large_border_radius,
  },
  messageContainer: {
    flex: 1,
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: theme.dark_overlays + '75',
    borderBottomLeftRadius: theme.large_border_radius,
    borderBottomRightRadius: theme.large_border_radius,
  },
  logoImage: {
    width: 120,
    height: 50,
    tintColor: theme.white_color,
    alignSelf: 'center',
  },
  welcomeContainer: {
    alignSelf: 'center',
    marginTop: 120,
    marginBottom: 120,
    width: 130,
  },
  welcomeTitle: {
    fontSize: theme.font_size_large,
    textAlign: 'center',
    letterSpacing: 9,
    fontWeight: '700',
    color: theme.white_color,
  },
  welcomeSlogan: {
    textAlign: 'center',
    color: theme.white_color,
  },
  actionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 40,
  },
  Button: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ButtonText: {
    marginHorizontal: 6,
    color: theme.white_color,
    fontWeight: '700',
  },
  forgotPasswordText: {
    fontWeight: '700',
    fontSize: theme.font_size_extra_small,
    textAlign: 'center',
    color: theme.white_color,
  },
  inputsContainer: {
    marginBottom: 20,
  },
  indicatorIcon: {
    alignSelf: 'center',
    marginBottom: 5,
    marginTop: 40,
  },
});

export default styles;
