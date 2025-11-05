import useFetch from './usefetch';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './bloglist-detail.css';

import { useState } from 'react';

const BlogListDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: blogs, error } = useFetch('http://localhost:8000/blogs/' + id);

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('');
  const [ispending, setIsPending] = useState(false);
  const [isediting, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setTitle(blogs.title);
    setBody(blogs.Body);
    setAuthor(blogs.Author);
    setIsEditing(true);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const updateBlog = { title, body, author };

    setIsPending(true);

    fetch('http://localhost:8000/blogs/' + id, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updateBlog),
    }).then(() => {
      console.log('update blog successfully');
      setIsPending(false);
      navigate('/');
    });
  };

  const handleClick = () => {
    fetch('http://localhost:8000/blogs/' + blogs.id, {
      method: 'DELETE',
    }).then(() => {
      console.log('blog is deleted successfully ');
      navigate('/');
    });
  };

  return (
    <div className="blog-detail">
      {ispending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {blogs && !isediting && (
        <article>
          <h2>{blogs.title}</h2>
          <p>Written By {blogs.author}</p>
          <div>{blogs.body}</div>
          <button onClick={handleEditClick}>Edit</button>
          <button onClick={handleClick}>Delete</button>
        </article>
      )}

      {isediting && (
        <form className="edit-form" onSubmit={handleUpdate}>
          <label>Title:</label>
          <input
            type="text"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <label>Body:</label>
          <textarea
            required
            value={body}
            onChange={(e) => setBody(e.target.value)}
          ></textarea>

          <label>Author:</label>
          <input
            type="text"
            required
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />

          {!ispending && <button>Update Blog</button>}
          {ispending && <button disabled>Updating...</button>}
        </form>
      )}
    </div>
  );
};

export default BlogListDetail;
