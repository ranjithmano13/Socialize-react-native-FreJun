import React, { useState } from 'react';
import {TouchableOpacity, Text, View, TextInput, Image,Alert} from 'react-native';
import { useDispatch } from 'react-redux';
import { add } from '../redux/userSlice';

const LogInScreen = ({navigation}) => {
  const [userName,setUserName] = useState("")
  const [userPassword,setUserPassword] = useState("")
  const dispatch = useDispatch();

  const handleLogin = async () =>{
    try {
      const res = await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: userName, 
          password: userPassword, 
        }),
      });
      const data = await res.json();
      if(data.message === "Invalid credentials"){
      Alert.alert('Error', 'User name not found');
        
      }
      else{
      console.log(data)
      console.log(data.id)

      dispatch(add(data));
      navigation.replace('MainStack');
      }
     
    } catch (error) {
      console.log('Error:', error);
      Alert.alert('Error', 'User name not found');
    }
  
setUserName("")
setUserPassword("")
  }


  
  return (
    <View style={{
      flex:1,
      justifyContent:'center',
      padding:20
    }}>
      <View style={{
        justifyContent:'center',alignItems:'center',marginBottom:50
      }}>
      <Image source={require('../assets/socializeFullTextLogoThemeColor.png')} style={{width:300,objectFit:'contain'}}/>

      </View>
      <TextInput  
      style={{
        borderBottomWidth:2,
        borderColor:"#00002C",
        color:"#00002C",
        fontSize:20,
        margin:15
      }}
      placeholder='Enter username or email'
      placeholderTextColor={'#D3D3D3'}
      onChangeText={text=>setUserName(text)}
      />
      <TextInput  
      style={{
        borderBottomWidth:2,
        borderColor:"#00002C",
        color:"#00002C",
        fontSize:20,
        margin:15

      }}
      placeholder='Enter password'
      placeholderTextColor={'#D3D3D3'}
      onChangeText={text=>setUserPassword(text)}


      />
      <TouchableOpacity style={{padding:10,backgroundColor:'#00002C',alignItems:'center',marginTop:20,marginLeft:30,marginRight:30,borderRadius:12}} onPress={handleLogin}>
        <Text style={{fontSize:18,color:'#FFFF'}}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LogInScreen;
