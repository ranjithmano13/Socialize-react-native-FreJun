import {StyleSheet} from 'react-native';

const colors = {
  COLOR_THEME: '#00002C',
  COLOR_WHITE: '#FFFF',
  COLOR_BLACK:'#0000'
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 200,
    height: 200,
    marginLeft: -30,
  },
  themeColorBg: {
    backgroundColor: colors.COLOR_THEME,
  },
 
    whiteColorBg: {
    backgroundColor: colors.COLOR_WHITE,
  },


  themeColorTxt: {
    color: colors.COLOR_THEME,
  },

  blackColorTXT:{
    color: colors.COLOR_BLACK,

  }

});

export {colors, styles};
