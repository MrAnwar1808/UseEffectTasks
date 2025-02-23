
import React from "react";
import { useState } from "react";
import { useEffect } from "react";

function Example5() {
  const [posts, setPosts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    
    setLoading(true); 
    fetch('https://dummyjson.com/posts')

      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch the posts');
        }
        return response.json(); 
      })

      .then(data => {
        setPosts(data.posts); 
        setLoading(false); 
      })
      .catch(error => {
        setError(error.message); 
        setLoading(false); 
      });
  }, []); 

 
  if (loading) {
    return <div>Loading posts...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h2>Posts list</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            Title      :  <strong>{post.title}</strong>,<br />
            <strong>Body</strong>      :  {post.body},<br />
            <strong>Reactions  :</strong> <br />
            likes : {post.reactions.likes} ,<br />
            Dislikes : {post.reactions.dislikes}
            <br />
            
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Example5;
