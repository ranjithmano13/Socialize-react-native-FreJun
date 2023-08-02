import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import UserPost from '../components/UserPost';
import {useDispatch, useSelector} from 'react-redux';
import {add} from '../redux/userPostSlice';

const UserPostsListScreen = () => {
  const [post, setPost] = useState('');
  const [postIdCounter, setPostIdCounter] = useState(0); 
  const dispatch = useDispatch();
  const handlePost = () => {
    const newPost = {
        id: postIdCounter, 
        content: post,
      };
      dispatch(add(newPost));
  console.log(newPost);
  setPost('');
  setPostIdCounter(prevCounter => prevCounter + 1);
  };

  const postData = useSelector(state => state.userPost);
  const userImagedata = useSelector(state => state.user);

  const userImg = userImagedata[0].image;
  const userName = userImagedata[0].firstName + userImagedata[0].lastName
  console.log(userImg.image)



  return (
    <View style={{flex: 1, justifyContent: 'flex-start'}}>
      <TextInput
        style={{
          borderWidth: 2,
          borderColor: '#00002C',
          color: '#00002C',
          fontSize: 20,
          margin: 15,
          height: 100,
        }}
        placeholder="What's on your mind"
        placeholderTextColor={'#D3D3D3'}
        onChangeText={text => setPost(text)}
        value={post}
      />
      <TouchableOpacity
        style={{
          backgroundColor: '#00002C',
          alignItems: 'center',
          marginTop: 20,
          marginLeft: 30,
          marginRight: 30,
          borderRadius: 12,
          marginBottom: 10,
        }}
        onPress={handlePost}>
        <Text style={{fontSize: 18, padding: 10, margin: 10}}>Post</Text>
      </TouchableOpacity>
      <ScrollView style={{flex: 1, padding: 10, backgroundColor: '#00002C'}}>

      {postData.map((postD)=>(<UserPost
      
      post = {postD} key={postD.id} userImg = {userImg} userName = {userName}
      />))}
       
      </ScrollView>
    </View>
  );
};

export default UserPostsListScreen;
