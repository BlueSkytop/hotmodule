import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import BackButton from "../../models/BackButton";
import {IPost} from "../../models/IPostModel";


export interface PostsProps {
    userID: number;
}
const Posts: React.FC = () => {
    const { userId } = useParams<{ userId: string }>();
    const [posts, setPosts] = useState<IPost[]>([]);

    useEffect(() => {
        if (userId) {
            axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
                .then(response => {
                    setPosts(response.data);
                })
                .catch(error => console.error('Error fetching posts:', error));
        }
    }, [userId]);

    return (
        <div id={'postsBox'}>
            <BackButton />
            <h1>Post by User ID: {userId}</h1>
            {posts.map(post => (
                <div>
                    <h2>Title:</h2> <p>{post.title}</p>
                    <h2>Post:</h2> <p>{post.body}</p>
                </div>
            ))}
        </div>
    );
};
export default Posts;