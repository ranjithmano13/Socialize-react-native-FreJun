import React, {useState, useEffect} from 'react';
import {Text, View, ScrollView, TouchableOpacity, Image} from 'react-native';
import {useSelector} from 'react-redux';


const UserProfileScreen = ({navigation}) => {
 
  const data = useSelector(state => state.user);
  console.log(data[0].image);
  const userImg = data[0].image;

  // useEffect(() => {
  //   const handleLogin = async () => {
  //     try {
  //       const res = await fetch(`https://dummyjson.com/users/${userId}`);
  //       const data = await res.json();
  //       if (data.message === `Invalid user id '${userId},${userId}`) {
  //         return (
  //           <View
  //             style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
  //             <TouchableOpacity>
  //               <Text style={{fontSize: 30, color: 'black'}}>Reload</Text>
  //             </TouchableOpacity>
  //           </View>
  //         );
  //       } else {
  //         setData(data);
  //         setUserImg(data.image);
  //       }
  //     } catch (error) {
  //       console.log('Error:', error);
  //     }
  //   };
  //   handleLogin();
  // }, [userId]);

const hanldeSignOut = () => {
  navigation.replace('Login')
}




  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#00002C',
        justifyContent: 'center',
        padding: 10,
      }}>
      <View style={{flex: 1}}></View>
      <View
        style={{
          flex: 9,
          backgroundColor: '#FFFF',
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}>
        
          <Image
            source={{uri: userImg}}
            style={{
              width: 100,
              height: 100,
              borderRadius: 100,
              borderColor: '#00002C',
              borderWidth: 2,
              marginTop:-50,
              backgroundColor:"white"
            }}
          />
        
        <Text style={{color: 'black', fontSize: 32}}>{data[0].firstName} {data[0].lastName}</Text>

        <ScrollView style={{flex: 1,margin:20}}>
          <View style={{flex:1,justifyContent:'center',alignItems:'center',padding:5}}>
          <Text style={{color:"black",fontSize:20,padding:5}}>Email : {data[0].email}</Text>
          <Text style={{color:"black",fontSize:20,padding:5}}>Contact : {data[0].phone}</Text>
          <Text style={{color:"black",fontSize:20,padding:5}}>DOB : {data[0].birthDate}</Text>
          <Text style={{color:"black",fontSize:20,padding:5}}>Gender : {data[0].gender}</Text>
          
          </View>
          
        </ScrollView>
      </View>

      <TouchableOpacity style={{padding:10,margin:30,alignItems:'center'}} onPress={hanldeSignOut}>
        <Text style={{fontSize:32}}>Sign Out</Text>
      </TouchableOpacity>
    </View>
  );
};

export default UserProfileScreen;
