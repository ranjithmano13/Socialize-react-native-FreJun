import React, {useEffect, useState} from 'react';
import {View, Text, Image,TouchableOpacity} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import { faHeart as fasHeart, faComments, faShare  } from '@fortawesome/free-solid-svg-icons';
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';
const PostsCard = ({posts}) => {
  const [postUserName, setPostUserName] = useState();
  const [postUserImage, setPostUserImage] = useState();
  const [isLiked, setIsLiked] = useState(true);

  useEffect(() => {
    const getPostUserData = async () => {
      const res = await fetch(`https://dummyjson.com/users/${posts.userId}`);
      const data = await res.json();
      setPostUserName(data.firstName);
      setPostUserImage(data.image);
    };
    getPostUserData();
  }, [posts.userId]);

  return (
    <View style={{flex: 1,marginBottom:20,backgroundColor:"#FFFF",padding:20,borderRadius:12}}>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center',
          
        }}>
        {postUserImage && (
          <Image
            source={{uri: postUserImage}}
            style={{width: 50, height: 50, borderRadius: 50,borderColor:'#00002C',borderWidth:2}}
          />
        )}
        <Text style={{color: 'black', fontSize: 18, marginLeft: 15}}>
          {postUserName}
        </Text>
      </View>

      <Text style={{color: 'black', fontSize: 18, padding: 5,marginBottom:20}}>
        {posts.body}
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
          <Text style={{color: 'black', marginLeft: 5}}>{posts.reactions}</Text>
        </TouchableOpacity>
        <TouchableOpacity>
        <FontAwesomeIcon icon={faComments}  style={{color:'#00002C'}} size={25}/>

        </TouchableOpacity>
        <FontAwesomeIcon icon={faShare} style={{color:'#00002C'}} size={25}/>
      </View>
    </View>
  );
};

export default PostsCard;

