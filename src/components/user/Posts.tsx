import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import BackButton from "./BackButton";

interface IPost {
    id: number;
    title: string;
    body: string;
}

interface IPost {
    id: number;
    title: string;
    body: string;
}

const Posts: React.FC = () => {
    const { userId } = useParams<{ userId: string }>();
    const [posts, setPosts] = useState<IPost[]>([]);

    useEffect(() => {
        axios.get(`https://dummyjson.com/posts/user/${userId}`)
            .then((response: { data: { posts: IPost[] } }) => {
                setPosts(response.data.posts);
            })
            .catch((error: any) => console.error('Error fetching posts:', error));
    }, [userId]);

    return (
        <div>
            <BackButton />
            <h1>Posts by User ID: {userId}</h1>
            {posts.map(post => (
                <div key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </div>
            ))}
        </div>
    );
};

export default Posts;