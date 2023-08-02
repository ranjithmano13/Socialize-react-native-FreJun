import React, {useEffect, useState} from 'react';
import {View, ScrollView} from 'react-native';
import PostsCard from '../components/PostsCard';

const AllPostsListScreen = () => {
  const [allPosts, setAllPosts] = useState([]);

  useEffect(() => {
    const getAllPosts = async () => {
     const res = await fetch('https://dummyjson.com/posts')
     const data = await res.json() 
     setAllPosts(data.posts)  
    };
    getAllPosts();
  }, []);

  return (
    
  <ScrollView style={{flex:1,padding:10,backgroundColor:"#00002C"}}>
        {allPosts.map((posts)=>(
            <PostsCard posts={posts} key={posts.id}/>
        ))}
  </ScrollView>
  );
};

export default AllPostsListScreen;
