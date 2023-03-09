import React, { useState, useEffect } from 'react';
import axios from 'axios';

function LatestBlogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    axios.get('https://dev.to/api/articles?username=devteam')
      .then(response => {
        setBlogs(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div className="container mt-3">
      <h1 className="text-center">Latest Blogs</h1>
      <div className="row mt-3">
        {blogs.map(blog => (
          <div className="col-md-4 mb-3" key={blog.id}>
            <div className="card">
              <img src={blog.cover_image} className="card-img-top" alt={blog.title} />
              <div className="card-body">
                <h5 className="card-title">{blog.title}</h5>
                <p className="card-text">{blog.description}</p>
                <a href={blog.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary">Read More</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LatestBlogs;
