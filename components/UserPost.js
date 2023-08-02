import React, {useEffect, useState} from 'react';
import {View, Text, Image,TouchableOpacity} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import { faHeart as fasHeart, faComments, faShare,faTrash  } from '@fortawesome/free-solid-svg-icons';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';
import { remove } from '../redux/userPostSlice';
import { useDispatch ,useSelector} from 'react-redux';
const UserPost = ({post,userImg,userName}) => {
    const dispatch = useDispatch()


  const [isLiked, setIsLiked] = useState(true);

    const deletePost = (id)=>{
        dispatch(remove(id))
    }



  return (
    <View style={{flex:1}}>

        <View key={post.id} style={{flex: 1,marginBottom:20,backgroundColor:"#FFFF",padding:20,borderRadius:12}}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
            
          }}>
          {userImg && (
            <Image
              source={{uri: userImg}}
              style={{width: 50, height: 50, borderRadius: 50,borderColor:'#00002C',borderWidth:2}}
            />
          )}
          <Text style={{color: 'black', fontSize: 18, marginLeft: 15}}>
            {userName} (you)
          </Text>
        </View>
  
        <Text style={{color: 'black', fontSize: 18, padding: 5,marginBottom:20}}>
          {post.content}
        </Text>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            
          }}>
          <TouchableOpacity style={{flexDirection: 'row', alignItems: 'center'}} onPress={()=>setIsLiked(!isLiked)}>
            {isLiked ? (
              <FontAwesomeIcon icon={farHeart} style={{color:'#00002C'}} size={25} />
            ) : (
              <FontAwesomeIcon icon={fasHeart} style={{color:'#00002C'}} size={25} />
            )}
            {/* <Text style={{color: 'black', marginLeft: 5}}>{posts.reactions}</Text> */}
          </TouchableOpacity>
          <TouchableOpacity>
          <FontAwesomeIcon icon={faComments}  style={{color:'#00002C'}} size={25}/>
  
          </TouchableOpacity>
          <FontAwesomeIcon icon={faShare} style={{color:'#00002C'}} size={25}/>
          <TouchableOpacity onPress={()=>deletePost(post.id)}>
          <FontAwesomeIcon icon={faTrash} style={{color:'#00002C'}} size={25}/>
  
          </TouchableOpacity>
        </View>
      </View>
    
    
    
    </View>

    
  );
};

export default UserPost;

