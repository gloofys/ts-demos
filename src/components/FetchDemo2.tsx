import {useState, useEffect} from "react";

const BASE_URL = 'https://jsonplaceholder.typicode.com/';

interface Post {
    id: number;
    title: string;
}

export default function FetchDemo2() {
    const [error, setError] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        const fetchPosts = async () => {
            setIsLoading(true);
            try {
                const response = await fetch(`${BASE_URL}/posts`);
                const posts = await response.json() as Post[];
                setPosts(posts);
            }catch(error:any) {
                setError(error);
            } finally {
                setIsLoading(false);
            }
        };
        fetchPosts();
    }, []);

    if (isLoading) {
        return <div>Loading...</div>;
    }
    if(error){
        return <div> Something went wrong, please try again.</div>
    }

    return (
        <div className="tutorial">
            <h1 style={{marginBottom: "4px", font: "20px"}}>Data Fetching in React</h1>
            <ul>
                {posts.map(post => {
                    return <li key={post.id}>{post.title}</li>
                })}
            </ul>
        </div>
    )
}