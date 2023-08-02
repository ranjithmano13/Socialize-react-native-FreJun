import React,{useEffect} from 'react'
import { StatusBar, Image, StyleSheet, View } from 'react-native'
import { colors } from '../styles'

const SplashScreen = ({navigation}) => {

        useEffect(() => {
          const splashTimeOut = setTimeout(()=>{
            navigation.replace('Login')
          },2000)
        
          return () => {
            clearTimeout(splashTimeOut)
          }
        }, [navigation])
        



 return(
    <View style={styles.container}>
        <StatusBar backgroundColor={colors.COLOR_THEME} barStyle={'light-content'} />
        <Image source={require('../assets/androidIcon.png')} style={styles.logo}/>
    </View>
 )
}

const styles = StyleSheet.create({
container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: colors.COLOR_THEME
},
logo:{
    width:200,
    height:200,
    marginLeft:-30
}
})

export default SplashScreen