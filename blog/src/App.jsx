import './App.css'
import {useState, useEffect} from 'react';
import axios from 'axios'

function App() {
  const [posts, setPosts] = useState([]);
  useEffect(()=>{
    const fetchUser = async() => {
      try{
        const response = await axios.get('/blogs');
        setPosts(response.data);
      } catch {
        console.log("Error");
      }
    };
    fetchUser();
  },[posts]);
  return (
    <div className='App'>
      {posts.map(post =>(
        <ul key={post._id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </ul>
      ))}
    </div>
  );
}

export default App
