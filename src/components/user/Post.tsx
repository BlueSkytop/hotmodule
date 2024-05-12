import React from 'react';
import {IPost} from "./Interfaces";
import {PostsProps} from "./Interfaces";

interface PostProps {
    post: IPost;
}

const Post: React.FC<PostProps> = ({ post }) => {
    return (
        <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
        </div>
    );
};

export default Post;