import React from "react";
import Post from "./Post";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../redux/actions";
import Loader from "./Loader";

const FetchedPosts = () => {
    const dispatch = useDispatch();
    const posts = useSelector((state) => state.postsReducer.fetchedPosts);
    const loading = useSelector((state) => state.appReducer.loading);
    if (loading) return <Loader />;

    if (!posts.length)
        return (
            <button type="button" onClick={() => dispatch(fetchPosts())} className="btn btn-primary">
                Load Posts
            </button>
        );

    return posts.map((post) => <Post key={post.id} post={post} />);
};

export default FetchedPosts;
