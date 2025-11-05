import './create.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('');
  const [ispending, setIsPending] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author };
    setIsPending(true);

    setTimeout(() => {
      fetch('http://localhost:8000/blogs', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(blog),
      }).then(() => {
        console.log('added new blog');
        setIsPending(false);
        navigate('/');
      });
    }, 1000);
  };
  return (
    <div className="createData">
      <h2>Add New Blog</h2>
      <form onSubmit={handleSubmit}>
        <label>Blog Title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog Body::</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Blog Author</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="mario">mario</option>
          <option value="yashi">yashi</option>
        </select>
        {!ispending && <button>Add Blog</button>}
        {ispending && <button disabled>Adding blog...</button>}
        <p>{title}</p>
        <p>{body}</p>
        <p>{author}</p>
      </form>
    </div>
  );
};

export default Create;
