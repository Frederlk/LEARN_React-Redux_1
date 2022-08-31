import FetchedPosts from "./_components/FetchedPosts";
import PostForm from "./_components/PostForm";
import Posts from "./_components/Posts";

function App() {
    return (
        <div className="container pt-3">
            <div className="row">
                <div className="col">
                    <h1>Post Form</h1>
                    <PostForm />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <h2>Sync Posts</h2>
                    <Posts />
                </div>
                <div className="col">
                    <h2>Async Posts</h2>
                    <FetchedPosts posts={[]} />
                </div>
            </div>
        </div>
    );
}

export default App;
